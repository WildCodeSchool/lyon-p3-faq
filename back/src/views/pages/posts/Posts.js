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
} from "@coreui/react";

import { Link, useHistory } from "react-router-dom";
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
const fields = ["question", "reponse", "created_by", "created_at"];

// Change filter label
const filterTitle = {
  label: "Filtre",
};

const Tables = () => {
  // States

  const [postsData, setPostsData] = useState();
  const [nbPosts, setNbPosts] = useState();
  const [tableFields, setTableFields] = useState();

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
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [nbPosts]);

  let history = useHistory();
  const handleRowClick = (e) => {
    history.push({
      pathname: `/pages/posts/modifypost/${e.id}`,
      datas: e,
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
                <CCol col="6" sm="4" md="3" className="mt-2">
                  <CButton active block color="dark" aria-pressed="true">
                    Archiver post
                  </CButton>
                </CCol>
                <CCol col="6" sm="4" md="3" className="mt-2">
                  <CButton active block color="dark" aria-pressed="true">
                    Publier post
                  </CButton>
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
                clickableRows
                sorter
                tableFilter={filterTitle}
                onRowClick={(e) => handleRowClick(e)}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
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
