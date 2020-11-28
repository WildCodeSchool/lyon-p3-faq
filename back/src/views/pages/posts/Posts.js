import React, { useEffect, useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCollapse,
} from "@coreui/react";

import { Link, useHistory } from "react-router-dom";
import PostModify from "./PostModify";
const axios = require("axios");

const getBadge = (status) => {
  switch (status) {
    case "active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "archived":
      return "danger";
    default:
      return "primary";
  }
};
//const fields = ["question", "reponse", "created_by", "created_at"];
const fields = {
  key: "show_details",
  label: "",
  _style: { width: "1%" },
  sorter: false,
  filter: false,
};

// Change filter label
const filterTitle = {
  label: "Filtre",
};

const Tables = () => {
  // States

  const [postsData, setPostsData] = useState();
  const [nbPosts, setNbPosts] = useState();
  const [tableFields, setTableFields] = useState();
  const [details, setDetails] = useState([]);
  const [updatePostStatus, setUpdatePostStatus]= useState(false)

  // Loading datas
  useEffect(() => {
    axios
      .get("http://51.210.47.134:3003/back/posts")
      .then(function (response) {
        // handle success
        response.data.map((post) => {
          if (post.status == null) {
            post.status = "active";
          } else {
            post.status = "archived";
          }
        });
        setPostsData(response.data);
        setNbPosts(response.data.length);
        setTableFields(
          Object.keys(response.data[0]).filter((field) => field != "id")
        );

        setTableFields((prevState) => {
          return [...prevState, fields];
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [nbPosts,updatePostStatus]);

  let history = useHistory();
  

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const handleUpdatePost = (item) => {
    
    history.push({
      pathname: `/pages/posts/modifypost/${item.id}`,

      state: item,
    });
  };

  const handleUpdatePostStatus = (item,action) => {
    
    axios
      .put(`http://51.210.47.134:3003/back/posts/${item.id}`, { "action" : action})
      .then(function (response) {
        // handle success
        setUpdatePostStatus(!updatePostStatus)
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
              <CDataTable
                items={postsData}
                fields={tableFields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                // clickableRows
                sorter
                tableFilter={filterTitle}
                //onRowClick={(e) => handleRowClick(e)}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {
                            toggleDetails(index);
                          }}
                        >
                          {details.includes(index) ? "Réduire" : "Plus"}
                        </CButton>
                      </td>
                    );
                  },
                  details: (item, index) => {
                    return (
                      <>
                        <CCollapse show={details.includes(index)}>
                          <CCardBody>
                            <h4>{item.username}</h4>
                            <p className="text-muted">
                              Actions : {item.registered}
                            </p>
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
                            <CButton size="sm" color="success" className="ml-1" onClick={() => {
                                handleUpdatePostStatus(item,"publish");
                              }}>
                              Publier
                            </CButton>
                            <CButton size="sm" color="danger" className="ml-1"  onClick={() => {
                                handleUpdatePostStatus(item,"archive");}}>
                              Archiver
                            </CButton>
                          </CCardBody>
                        </CCollapse>
                      </>
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
