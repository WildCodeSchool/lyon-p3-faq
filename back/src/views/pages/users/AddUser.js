import React, { useState, useEffect, useContext } from "react";
import { storeContext} from "../../../context";
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
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

const BasicForms = (props) => {

  //Context
  const [currentUser, setCurrentUser] = useContext(storeContext);

  let history = useHistory();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [typeCompte, setTypeCompte] = useState(3);
  const [roleDatas, setRoleDatas] = useState("");

  const idToCreate = props.location.datas + 1;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/back/users/roles`, {

        headers : {authentication : currentUser.token}
      })
      .then(function (response) {
        // handle success

        setRoleDatas(response.data);
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
   

    axios
      .post(`${process.env.REACT_APP_API_HOST}/back/users`, {
        name: `${nom} ${prenom}`,
        mail: `${email}`,
        role: `${typeCompte}`,
        id: `${idToCreate}`,
      }, {

        headers : {authentication : currentUser.token}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push(`/pages/users/`);
  };

  return (
    <>
      <CCol xs="12" md="4">
        <CCard>
          <CCardHeader>Ajout utilisateur</CCardHeader>
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
                      onChange={(e) => setPrenom(e.target.value)}
                      required
                    />
                  </CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="input1-group1"
                      name="input1-group1"
                      onChange={(e) => setPseudo(e.target.value)}
                      placeholder="Username"
                    />
                  </CInputGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="12">
                  <CInputGroup>
                    <CInput
                      type="email"
                      id="input2-group1"
                      name="input2-group1"
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
                    {roleDatas
                      ? roleDatas.map((role, index) => (
                          <option value={index + 1}>
                            {Object.values(role)}
                          </option>
                        ))
                      : ""}
                    {/* <option value="0">Please select</option>
                      <option value="1">Membre</option>
                      <option value="2">Rédacteur</option>
                      <option value="3">Admin</option> */}
                  </CSelect>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="success"
              onClick={handleSubmit}
            >
              <CIcon name="cil-scrubber" /> Valider
            </CButton>
            <CButton type="reset" size="sm" color="danger">
              <CIcon name="cil-ban" /> Reset
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </>
  );
};

export default BasicForms;
