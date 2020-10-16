import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";

import { useHistory } from "react-router-dom";

import usersData from "../../users/UsersData";

const UserSelect = (props) => {
  let idUser = props.match.params.iduser;
  
  let history = useHistory();

  const cancelChoice = (e) => {
    history.push("/pages/users/");
  };

  const deleteChoice = (e) => {
    usersData.map((user, i) => {
      if (user.id == idUser) {
        usersData.splice(i, 1);
      }
    });
    history.push("/pages/users/");
  };

  const modifyChoice = (e) => {
    history.push(`/pages/users/usermodify/${idUser}`);
  };

  const [modal, setModal] = useState(true);

  return (
    <CModal show={modal} onClose={setModal}>
      <CModalHeader closeButton>
        <CModalTitle> {idUser} : Que souhaitez-vous effectuer ? </CModalTitle>
      </CModalHeader>
      <CModalFooter>
        <CButton color="warning" onClick={(e) => modifyChoice(e)}>
          Modifier
        </CButton>
        <CButton color="danger" onClick={() => deleteChoice()}>
          Supprimer{" "}
        </CButton>
        <CButton
          color="secondary"
          onClick={() => {
            cancelChoice();
            setModal(false);
          }}
        >
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default UserSelect;
