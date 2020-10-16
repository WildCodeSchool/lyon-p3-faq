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

import {useHistory} from "react-router-dom";
import postsData from '../../datas/PostsData'

const PostSelect = (props) => {

    let idPost= props.match.params.idpost
    let history= useHistory();
    const cancelChoice = (e) => {

        history.push("/pages/posts/")

      };

      const deleteChoice = (e) => {

        postsData.map((post, i) => {
            if (post.id == idPost) {
              postsData.splice(i, 1);
            }
          });
        history.push("/pages/posts/")

      };

      const modifyChoice = (e) => {



        history.push(`/pages/posts/modifypost/${idPost}`)

      };

  const [modal, setModal] = useState(true);


  return (




            <CModal show={modal} onClose={setModal}>
              <CModalHeader closeButton>
                <CModalTitle>  {idPost} :  Que souhaitez-vous effectuer ? </CModalTitle>
              </CModalHeader>
              <CModalFooter>
                <CButton color="warning" onClick={(e) => modifyChoice(e)}>Modifier</CButton>
                <CButton color="danger" onClick= {() => deleteChoice()}>Supprimer </CButton>
                <CButton color="secondary" onClick={() => {
                    cancelChoice();
                    setModal(false)}}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>


  );
};

export default PostSelect;
