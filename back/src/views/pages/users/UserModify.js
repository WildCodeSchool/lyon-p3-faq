import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { Link, useHistory } from "react-router-dom";
import BackButton from "../../../components/BackButton";

const axios = require("axios");

const BasicForms = (props) => {
  
  
  const [danger, setDanger] = useState(false);
  let idUser = props.match.params.iduser;
  const infosUser = props.location.stated;
  const {updateField} = props.location.update


 
 


  let history = useHistory();
  const [nom, setNom] = useState(infosUser["name"].split(" ")[0]);
  const [prenom, setPrenom] = useState(infosUser["name"].split(" ")[1]);
  //const [pseudo,setPseudo] = useState("") TODO : include pseudo handling
  const [email, setEmail] = useState(infosUser["mail"]);
  const [typeCompte, setTypeCompte] = useState(infosUser["role_id"]);
  const [roles, setRoles] = useState();

  //Style
  const RightButton = styled(CButton)`
    float: right;
  `;
  const LeftButton = styled(CButton)`
    float: left;
  `;

  useEffect(() => {
    axios
      .get(`http://localhost:3002/back/users/roles`)
      .then(function (response) {
        setRoles(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleUpdate = (e) => {
    axios
      .put(`http://localhost:3002/back/users/${idUser}`, {
        //data to update
        name: `${nom} ${prenom}`,
        mail: `${email}`,
        role: `${typeCompte}`,
      })
      .then(function (response) {
      
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push({ pathname :`/pages/users/`,
  state: nom});
  };

  const handleDelete = () => {
    setDanger(!danger);

    axios
      .delete(`http://localhost:3002/back/users/${idUser}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push( { 
      path :`/pages/users/`,
    update : !props.location.update
  });
  };

  return (
    <>
      {/* Back To Home */}
      <Link to="/pages/users/">
        <div class="mb-5 col-6 col-sm-4 col-md-3 col-xl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="c-icon c-icon-2xl"
            role="img"
          >
            <path
              fill="var(--ci-primary-color, currentColor)"
              d="M294.637,496l-38.688-.035L16,255.729,256.334,16.048h38.277l.008,143.937H494.636v192H294.629ZM61.271,255.773l201.364,201.6-.008-137.391H462.636v-128H262.621l-.008-137.006Z"
              class="ci-primary"
            >
              {" "}
            </path>
          </svg>
          <BackButton>
            <span className="ml-3">Retour</span>
          </BackButton>
        </div>
      </Link>

      <CModal show={danger} onClose={() => setDanger(!danger)} color="danger">
        <CModalHeader closeButton>
          <CModalTitle>Warning</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Vous allez supprimer le compte de {nom} {prenom}. Souhaitez-vous
          continuer ?
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={handleDelete}>
            Valider
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>
            Annuler
          </CButton>
        </CModalFooter>
      </CModal>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>Modifier utilisateur</CCardHeader>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="12">
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">
                      Nom
                    </CLabel>
                    <CInput
                      id="exampleInputName2"
                      placeholder=""
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                    />
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">
                      Prénom
                    </CLabel>
                    <CInput
                      id="exampleInputName2"
                      placeholder=""
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      required
                    />
                  </CFormGroup>
                  {/* <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput id="input1-group1" name="input1-group1" value={pseudo} onChange= { e => setPseudo( e.target.value)} placeholder="Username" />
                    </CInputGroup> */}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="12">
                  <CInputGroup>
                    <CInput
                      type="email"
                      id="input2-group1"
                      name="input2-group1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <CInputGroupAppend>
                      <CInputGroupText>
                        <CIcon name="cil-envelope-closed" />
                      </CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">Type compte</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect
                    custom
                    name="select"
                    id="select"
                    value={typeCompte}
                    onChange={(e) => setTypeCompte(e.target.value)}
                  >
                    {roles
                      ? roles.map((role, i) => (
                          <option value={i + 1}>{role["nom"]}</option>
                        ))
                      : ""}
                  </CSelect>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>

          <CCardFooter>
            <LeftButton>
              <CButton
                type="submit"
                size="sm"
                color="success"
                onClick={(e) => handleUpdate(e)}
              >
                <CIcon name="cil-scrubber" /> Valider
              </CButton>
            </LeftButton>
            <RightButton>
              <CButton
                type="reset"
                size="sm"
                color="danger"
                onClick={() => setDanger(!danger)}
              >
                <CIcon name="cil-ban" /> Supprimer{" "}
              </CButton>
            </RightButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </>
  );
};

export default BasicForms;
