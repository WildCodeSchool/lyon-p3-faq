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
import tagsData from "../../datas/Tags";
import { Link, useHistory } from "react-router-dom";

const BasicForms = () => {
  let history = useHistory();
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const [nomTag, setNomTag] = useState(0);

  const handleChange = (e) => {
    setNomTag(e.target.value);
  };

  const handleSubmit = () => {
   
    tagsData.push({
      id: "11",
      nom: `${nomTag}`,
      created_by: "Pierre Ammeloot",
      created_at: "31/02/2020 19h45",
    });
    history.push(`/pages/tags/`);
  };

  return (
    <>
      <CCol xs="12" md="12">
        <CCard>
          <CCardHeader>Ajouter une catégorie</CCardHeader>
          <CCardBody>
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-email">Nom catégorie</CLabel>
                <CInput
                  type="size"
                  id="nf-email"
                  name="nf-email"
                  placeholder="Entrer catégorie"
                  autoComplete=""
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <CFormText className="help-block">
                  Merci d'entrer une nouvelle catégorie
                </CFormText>
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
              <CIcon name="cil-scrubber" /> Ajouter
            </CButton>{" "}
            <CButton type="reset" size="sm" color="danger">
              <CIcon name="cil-ban" /> <Link to={`/pages/tags`}>Reset</Link>
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </>
  );
};

export default BasicForms;
