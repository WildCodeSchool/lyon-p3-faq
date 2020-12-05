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
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { Link, useHistory } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import ValidateButton from "../../../components/validateButton";
import DeleteButton from "../../../components/deleteButton";
const axios = require("axios");

const BasicForms = () => {
  let history = useHistory();

  const [danger, setDanger] = useState(false);
  const [titreQuestion, setTitreQuestion] = useState("");
  const [question, setQuestion] = useState("");
  const [reponse, setReponse] = useState("");

  const handleAddPost = () => {
    axios
      .post(`${process.env.REACT_APP_API_HOST}/back/posts/`, {
        //data to add

        type: "question",
        titre_question: `${titreQuestion}`,
        contenu_question: `${question}`,
      })
      .then(function (response) {
        axios
          .post(`${process.env.REACT_APP_API_HOST}/back/posts/`, {
            //data to add

            type: "reponse",
            question_id: `${response.data["id"]}`,
            contenu: `${reponse}`,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })

      .catch(function (error) {
        console.log(error);
      });

    history.push(`/pages/posts/`);
  };

  const handleDelete = () => {
    setDanger(!danger);

    axios
      .post(`${process.env.REACT_APP_API_HOST}/back/posts/`, {
        action: "archive",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push(`/pages/posts/`);
  };

  const handleReset = () => {
    setTitreQuestion("");
    setQuestion("");
    setReponse("");
  };

  return (
    <>
      <Link to="/pages/posts/">
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
          Vous allez supprimer le post numéro {titreQuestion} Titre question :{" "}
          {titreQuestion}. Souhaitez-vous continuer ?
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

      <CCol xs="12" md="8">
        <CCard>
          <CCardHeader>Ajout Post</CCardHeader>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="12">
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">
                      Titre Question
                    </CLabel>
                    <CInput
                      placeholder="Contenu"
                      className="pr-1"
                      value={titreQuestion}
                      onChange={(e) => setTitreQuestion(e.target.value)}
                      required
                    />
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">
                      question
                    </CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      placeholder="Contenu"
                      className="pr-1"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      required
                    />
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">
                      Réponse
                    </CLabel>

                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      placeholder="Contenu"
                      className="pr-1"
                      value={reponse}
                      onChange={(e) => setReponse(e.target.value)}
                      required
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <ValidateButton>
              <CButton
                type="submit"
                size="sm"
                color="success"
                onClick={handleAddPost}
              >
                <CIcon name="cil-scrubber" /> Valider
              </CButton>
            </ValidateButton>
            <DeleteButton>
              <CButton
                type="reset"
                size="sm"
                color="danger"
                onClick={() => handleReset()}
              >
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </DeleteButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </>
  );
};

export default BasicForms;
