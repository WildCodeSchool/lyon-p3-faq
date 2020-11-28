import React, { useEffect, useState } from "react";
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

const axios = require("axios");
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
  //Style

  // States

  const [usersData, setUsersData] = useState();
  const [nbUsers, setNbUsers] = useState();
  const [tableFields, setTableFields] = useState();

  let history = useHistory();

  const selectUser = (e) => {
    history.push({
      pathname: `/pages/users/usermodify/${e.id}`,
      state: e,
    });
  };

  // Change filter label
  const filterTitle = {
    label: "Filtre",
  };

  useEffect(() => {
    axios
      .get("http://51.210.47.134:3003/back/users")
      .then(function (response) {
        // handle success
        setUsersData(response.data);
        setNbUsers(response.data.length);
        setTableFields(
          Object.keys(response.data[0]).filter(
            (user) => user == "name" || user == "mail" || user == "role"
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [nbUsers]);
  return (
    <>
      <CRow>
        <CCol className="text-center" >
          <CCard>
            <CCardHeader>Gestion des utilisateurs</CCardHeader>

            <CRow className="mt-3" style={{  justifyContent:"center" }} >
              <CCol  lg="2" md="3" xs="6" className="text-center" >
                <Link to={`/pages/users/adduser`}>
                  <CButton
                    active
                    block
                    color="dark"
                    aria-pressed="true"
                    style={{ display:"flex", justifyContent:"center" }}
                   
                  
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
                tableFilter={filterTitle}
                pagination
                clickableRows
                columnFilter
                
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
