import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import usersData from "../../users/UsersData";
import { Link, useHistory } from "react-router-dom";

const BasicForms = (props) => {

    let idUser= props.match.params.iduser


  let history = useHistory();
  const [nom,setNom] = useState("")
  const [prenom,setPrenom] = useState("")
  const [pseudo,setPseudo] = useState("")
  const [email,setEmail] = useState("")
  const [typeCompte,setTypeCompte] = useState("")



  useEffect(() => {

    const actualUser =usersData.filter( user => user.id == idUser)

    setNom(actualUser[0].nom.split(" ")[0])
    setPrenom(actualUser[0].nom.split(" ")[1])
    setPseudo(actualUser[0].pseudo)
    setEmail(actualUser[0].email)
    setTypeCompte(actualUser[0].created_at)

    },[])



  const handleSubmit = () => {

    usersData.map( user => {
    if (user.id == idUser) {

 user.nom= nom
 user.prenom= prenom
 user.pseudo= pseudo
 user.email= email
 user.status= typeCompte

    }


    })

    history.push(`/pages/users/`);
  };

  const handleReset = () => {
    setNom("")
    setPrenom("")
    setPseudo("")
    setEmail("")
    setTypeCompte("")

  };

  return (
    <>
    <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
             Modifier utilisateur
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                  <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Nom</CLabel>
                  <CInput id="exampleInputName2" placeholder="" value={nom} onChange= { e => setNom( e.target.value)} required />
                </CFormGroup>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Prénom</CLabel>
                  <CInput id="exampleInputName2" placeholder="" value={prenom} onChange= { e => setPrenom( e.target.value)} required />
                </CFormGroup>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput id="input1-group1" name="input1-group1" value={pseudo} onChange= { e => setPseudo( e.target.value)} placeholder="Username" />
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput type="email" id="input2-group1" name="input2-group1" value={email} onChange= { e => setEmail( e.target.value)} placeholder="Email" />
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
                    <CSelect custom name="select" id="select" value={typeCompte} onChange= { e => setTypeCompte( e.target.value)}>
                      <option value="0">Please select</option>
                      <option value="Membre">Membre</option>
                      <option value="Redacteur">Rédacteur</option>
                      <option value="Admin">Admin</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success" onClick= {handleSubmit}><CIcon name="cil-scrubber"  /> Valider</CButton>
              <CButton type="reset" size="sm" color="danger" onClick= {handleReset}><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </>
  );
};

export default BasicForms;
