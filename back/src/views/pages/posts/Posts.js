import React, { useEffect, useState, useContext } from "react";
import { storeContext } from "../../../context";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CFormGroup,
  CLabel,
  CInputCheckbox,
} from "@coreui/react";

import { Link, useHistory } from "react-router-dom";
import dotenv from "dotenv";
const axios = require("axios");

const getBadge = (status) => {
  switch (status) {
    case "active":
      return "success";
    case "Inactive":
      return "secondary";
    case "pending":
      return "warning";
    case "archived":
      return "danger";
    default:
      return "primary";
  }
};
//const fields = ["question", "reponse", "created_by", "created_at"];
const fields = [
  {
    key: "actions",
    label: "Actions",
    _style: { width: "20%" },
    sorter: false,
    filter: false,
  },
];

// Change filter label
const filterTitle = {
  label: "Filtre",
  palceholder: "Contenu",
};

const Tables = () => {
  // States

  const [postsData, setPostsData] = useState();

  const [nbPosts, setNbPosts] = useState();
  const [tableFields, setTableFields] = useState();
  const [currentUser, setCurrentUser] = useContext(storeContext);
  const [archiveChecked, setArchiveChecked] = useState(false);
  const [pendingChecked, setPendingChecked] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [labelTrigger, setLabelTrigger] = useState(false);
  const [updatePostStatus, setUpdatePostStatus] = useState(false);
  let history = useHistory();

  // Loading datas
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/back/posts`, {
        headers: { authentication: currentUser.token },
      })
      .then(function (response) {
        // handle success
        response.data.map((post) => {
          if (post.publicated_at == null && post.disabled_at == null) {
            post.status = "pending";
          }
          if (post.publicated_at !== null && post.disabled_at === null) {
            post.status = "active";
          }

          if (post.publicated_at === null && post.disabled_at !== null) {
            post.status = "archived";
          }
        });
        setPostsData(response.data);
        setNbPosts(response.data.length);
        setTableFields(Object.keys(response.data[0]));

        setTableFields((prevState) => {
          return [...prevState, fields[0]];
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [nbPosts, updatePostStatus]);

  const handleUpdatePost = (item) => {
    console.log("item : ", item.id);

    history.push({
      pathname: `/pages/posts/modifypost/${item.id}`,

      state: item,
    });
  };

  const handleUpdatePostStatus = (item, action) => {
    console.log("item", item);
    axios
      .put(
        `${process.env.REACT_APP_API_HOST}/back/posts/${item.id}`,
        {
          action: action,
          idUser: currentUser.id,
        },
        {
          headers: { authentication: currentUser.token },
        }
      )
      .then(function (response) {
        // handle success
        setUpdatePostStatus(!updatePostStatus);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Gestion des posts
              <CRow className="align-items-center ">
                <CCol col="6" sm="4" md="3" className="mt-2">
                  <Link to={`/pages/posts/addpost`}>
                    <CButton active block color="dark" aria-pressed="true">
                      Ajouter Post
                    </CButton>
                  </Link>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Catégories </CLabel>
                </CCol>
                <CCol md="9">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox1"
                      name="inline-checkbox1"
                      value="option1"
                      onChange={(e) => {
                        setArchiveChecked(e.target.checked);
                        setTrigger(!trigger);

                        setPendingChecked( pendingChecked? !pendingChecked : pendingChecked);
                        setLabelTrigger("archived");
                      }}
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox1"
                    >
                      Archived
                    </CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox2"
                      name="inline-checkbox2"
                      value="option2"
                      onChange={(e) => {
                        setLabelTrigger("pending");
                        setPendingChecked(e.target.checked);
                        setArchiveChecked( archiveChecked? !archiveChecked: archiveChecked)
                        setTrigger(!trigger);
                      }}
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox2"
                    >
                      Pending
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>

              <CDataTable
                items={
                  postsData
                    ? (archiveChecked === false && pendingChecked === false)  ?
                       postsData
                      : postsData.filter((post) => post.status == labelTrigger)
                    : ""
                }
                fields={tableFields}
                hover
                striped
                itemsPerPageSelect
                bordered
                size="sm"
                itemsPerPage={5}
                pagination
                responsive
                //clickableRows
                sorter
                tableFilter={filterTitle}
                //onRowClick={(index) => toggleDetails(index)}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),

                  actions: (item, index) => {
                    return (
                      <CCardBody>
                        <CButton
                          size="sm"
                          color="info"
                          className="ml-1"
                          onClick={() => {
                            handleUpdatePost(item);
                          }}
                        >
                          Modifier
                        </CButton>
                        <CButton
                          size="sm"
                          color="success"
                          className="ml-1"
                          onClick={() => {
                            handleUpdatePostStatus(item, "publish");
                          }}
                        >
                          Publish
                        </CButton>
                        <CButton
                          size="sm"
                          color="danger"
                          className="ml-1"
                          onClick={() => {
                            handleUpdatePostStatus(item, "archive");
                          }}
                        >
                          Archiver
                        </CButton>
                      </CCardBody>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Tables;
