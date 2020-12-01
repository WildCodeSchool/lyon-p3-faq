import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
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

const BasicForms = (props) => {
  const postsDatas = props.location.state;

  const [danger, setDanger] = useState(false);
  let history = useHistory();

  let idPost = props.match.params.idpost;
  console.log("idpost :", idPost);

  const [titreQuestion, setTitreQuestion] = useState("");
  const [question, setQuestion] = useState("");
  const [reponse, setReponse] = useState("");

  useEffect(() => {
    setTitreQuestion(postsDatas["titre"]);
    setQuestion(postsDatas["contenu_question"]);
    setReponse(postsDatas["contenu_reponse"]);
  }, []);

  const handleUpdatePost = () => {
    axios

      .put(`http://localhost:3002/back/posts/${idPost}`, {
        //data to update
        action: "update",
        titre_question: `${titreQuestion}`,
        contenu_question: `${question}`,

        contenu_reponse: `${reponse}`,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    //No exisiting answer before updating this field in the form
    if (postsDatas.contenu_reponse === null) {
      axios

        .post(`http://localhost:3002/back/posts/`, {
          //data to update
          type: "reponse",
          question_id: `${idPost}`,
          contenu: `${reponse}`,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    history.push(`/pages/posts/`);
  };

  const handleDelete = () => {
    setDanger(!danger);

    axios
      .put(`http://localhost:3002/back/posts/${idPost}`, {
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
          Vous allez supprimer le post numéro {idPost} Titre question :{" "}
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
          <CCardHeader>Modification Post</CCardHeader>
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
                      Question
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
                onClick={handleUpdatePost}
              >
                <CIcon name="cil-scrubber" /> Valider
              </CButton>
            </ValidateButton>
            <DeleteButton>
              <CButton
                type="reset"
                size="sm"
                color="danger"
                onClick={() => setDanger(!danger)}
              >
                <CIcon name="cil-ban" /> Supprimer
              </CButton>
            </DeleteButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </>
  );
};

export default BasicForms;
