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
import { connect } from "react-redux";

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
  // States

  let [usersData, setUsersData] = useState();
  const [nbUsers, setNbUsers] = useState();
  const [updatedOne, setUpdatedOne] = useState("");
  const [tableFields, setTableFields] = useState();
  const [idMaxUsers, setIdMaxUsers] = useState();

  const updateField = (newValue) => {
    setUpdatedOne(newValue);
  };

  let history = useHistory();

  const selectUser = (e) => {
    setUpdatedOne(e);
    history.push({
      pathname: `/pages/users/usermodify/${e.id}`,
      stated: e,
      update: { updateField },
    });
  };

  // Change filter label
  const filterTitle = {
    label: "Filtre",
    placeholder: "Contenu",
  };

  useEffect(
    (e) => {
      axios
        .get("http://localhost:3002/back/users?withRoles=true")
        .then(function (response) {
          // handle success

          setNbUsers(response.data.length);
          setUsersData(response.data);

          setTableFields(
            Object.keys(response.data[0]).filter(
              (user) => user == "name" || user == "mail" || user == "role"
            )
          );
          return response.data;
        })

        .then((data) => {
        const arrayUsers = Object.values(data)
        const idList= arrayUsers.map ( user => {return (user.id)})
        setIdMaxUsers(Math.max(...idList));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    [nbUsers]
  );
  return (
    <>
      <CRow>
        <CCol className="text-center">
          <CCard>
            <CCardHeader>Gestion des utilisateurs</CCardHeader>

            <CRow className="mt-3" style={{ justifyContent: "center" }}>
              <CCol lg="2" md="3" xs="6" className="text-center">
                <Link
                  to={{
                    pathname: `/pages/users/adduser`,
                    datas: idMaxUsers,
                  }}
                >
                  <CButton
                    active
                    block
                    color="dark"
                    aria-pressed="true"
                    style={{ display: "flex", justifyContent: "center" }}
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
                itemsPerPage={50}
                tableFilter={filterTitle}
                pagination
                clickableRows
                sorter
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
