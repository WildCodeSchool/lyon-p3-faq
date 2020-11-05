import React, { useState } from "react";
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

const BasicForms = () => {
  let history = useHistory();
  const [nom,setNom] = useState("")
  const [prenom,setPrenom] = useState("")
  const [pseudo,setPseudo] = useState("")
  const [email,setEmail] = useState("")
  const [typeCompte,setTypeCompte] = useState("")
   

 

  const handleSubmit = () => {
    usersData.push({
    id:"21",
    nom:`${nom} ${prenom}`,
    created_at:`${typeCompte}`,
    created_by :"2018/01/05",
    email:{email},
    pseudo: {pseudo},
    status: "Pending"
    

      
    });
    history.push(`/pages/users/`);
  };

  return (
    <>
    <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
             Ajout utilisateur
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                  <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Nom</CLabel>
                  <CInput id="exampleInputName2" placeholder="" onChange= { e => setNom( e.target.value)} required />
                </CFormGroup>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Prénom</CLabel>
                  <CInput id="exampleInputName2" placeholder="" onChange= { e => setPrenom( e.target.value)} required />
                </CFormGroup>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput id="input1-group1" name="input1-group1" onChange= { e => setPseudo( e.target.value)} placeholder="Username" />
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput type="email" id="input2-group1" name="input2-group1" onChange= { e => setEmail( e.target.value)} placeholder="Email" />
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
                    <CSelect custom name="select" id="select" onChange= { e => setTypeCompte( e.target.value)}>
                      <option value="0">Please select</option>
                      <option value="Membre">Membre</option>
                      <option value="Rédacteur">Rédacteur</option>
                      <option value="Admin">Admin</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success" onClick= {handleSubmit}><CIcon name="cil-scrubber"  /> Valider</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </>
  );
};

export default BasicForms;
