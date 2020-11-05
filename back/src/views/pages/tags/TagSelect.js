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
import TagsData from '../../datas/Tags'

const TagModify = (props) => {

    let nomTag= props.match.params.nomtag
    let history= useHistory();
    const cancelChoice = (e) => {
        
        history.push("/pages/tags/")
        
      };

      const deleteChoice = (e) => {

        const indexToDelete= TagsData.indexOf(nomTag)
        TagsData.splice(indexToDelete,1)
        history.push("/pages/tags/")
        
      };

      const modifyChoice = (e) => {

        
        
        history.push(`/pages/tags/TagModify/${nomTag}`)
        
      };

  const [modal, setModal] = useState(true);
 

  return (
    
        
            

            <CModal show={modal} onClose={setModal}>
              <CModalHeader closeButton>
                <CModalTitle>  {nomTag} :  Que souhaitez-vous effectuer ? </CModalTitle>
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

export default TagModify;
