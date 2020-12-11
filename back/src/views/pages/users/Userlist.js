import React, { useEffect, useState, useContext } from "react";
import { storeContext} from "../../../context";
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
import dotenv from  'dotenv'


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


//Context
const [currentUser, setCurrentUser] = useContext(storeContext);


  // States

  let [usersData, setUsersData] = useState();
  const [nbUsers, setNbUsers] = useState();

  const [tableFields, setTableFields] = useState();
  const [idMaxUsers, setIdMaxUsers] = useState();

 

  let history = useHistory();

  const selectUser = (e) => {
   
    history.push({
      pathname: `/pages/users/usermodify/${e.id}`,
      user: e,
      
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
        .get(`${process.env.REACT_APP_API_HOST}/back/users?withRoles=true`, {

          headers : {authentication : currentUser.token}
        })
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

            <CRow className="align-items-center">
              <CCol col="6" sm="4" md="3" className="mt-2 ml-4">
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
                itemsPerPage={20}
                itemsPerPageSelect={{values : [20,50], "replaces default" :20, label:"Users par page"}}
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
