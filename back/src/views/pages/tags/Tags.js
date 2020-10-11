import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from "@coreui/react";
import { Link, useHistory} from "react-router-dom";
import tagsData from "../../datas/Tags";
import { object } from "prop-types";

const fields = ["id", "nom", "created_by", "created_at"];

const Tables = () => {

  let history= useHistory();
  const [idTag, setIdTag] = useState(2);

  const selectTag =  (e) => {
    
    
   
    history.push(`/pages/tags/TagSelect/${e.nom}`)
  
    
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Gestion des tags
              <CRow className="align-items-center mt-3">
                <CCol col="6" sm="4" md="2">
                  <Link to={`/pages/tags/addtags`}>
                    <CButton active block color="dark" aria-pressed="true">
                      Add Tag
                    </CButton>
                  </Link>
                </CCol>
              </CRow>
            </CCardHeader>

            <CCardBody>
              <CDataTable
                onRowClick={(e) => selectTag(e)}
                items={tagsData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                clickableRows
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Tables;
