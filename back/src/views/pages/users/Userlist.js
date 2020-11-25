import React, {useEffect,useState} from "react";
import { Link, useHistory } from "react-router-dom";
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

import usersDatas from "../../users/UsersData";
import tagsData from "../../datas/Tags";
import { indexOf } from "core-js/fn/array";
const axios = require('axios');



const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = [
  "id",
  "nom",
  "created_at",
  "created_by",
  "status",
  "email",
  "pseudo",
];



const Tables = () => {

  // States
const [usersData,setUsersData] = useState();
const [tableFields,setTableFields] = useState();


  let history = useHistory();

  const selectUser = (e) => {
    history.push(`/pages/users/userselect/${e.id}`);
  };



  useEffect(() => {
    axios
      .get("http://51.210.47.134:3002/back/users")
      .then(function (response) {
        // handle success
        
        setUsersData(response.data);
       
        setTableFields(Object.keys(response.data[0]).filter( user => user.name <3));

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Gestion des utilisateurs</CCardHeader>

            <CRow className="align-items-center mt-3">
              <CCol col="6" sm="4" md="2">
                <Link to={`/pages/users/adduser`}>
                  <CButton
                    active
                    block
                    color="dark"
                    aria-pressed="true"
                   
                  >
                    Add User
                  </CButton>
                </Link>
              </CCol>
            </CRow>

            <CCardBody>
              <CDataTable
                items={usersData}
                fields={tableFields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                clickableRows
                onRowClick={(e) => selectUser(e)}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
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
