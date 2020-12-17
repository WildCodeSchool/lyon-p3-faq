import React, { lazy, useEffect, useContext, useState } from "react";
import { storeContext } from "../../context";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";

const axios = require("axios");
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Dashboard = () => {
  //Context
  const [currentUser, setCurrentUser] = useContext(storeContext);
  const [nbUsers, setNbUsers] = useState();
  const [usersData, setUsersData] = useState();
  const [postsData, setPostsData] = useState();
  const [nbPosts, setNbPosts] = useState();
  const [postsUnanswered, setNbPostsUnanswered] = useState();
  const [pendingQuestions, setPendingQuestions] = useState();

  useEffect(
    (e) => {
      axios
        .get(`${process.env.REACT_APP_API_HOST}/back/users?withRoles=true`, {
          headers: { authentication: currentUser.token },
        })
        .then(function (response) {
          // handle success

          setNbUsers(response.data.length);
          setUsersData(response.data);
        })

        .catch(function (error) {
          // handle error
          console.log(error);
        });

      axios
        .get(`${process.env.REACT_APP_API_HOST}/back/posts`, {
          headers: { authentication: currentUser.token },
        })
        .then(function (response) {
          // handle success

          console.log("data: ", response.data);
          setNbPosts(response.data.length);
          setPostsData(response.data);
          UnansweredPosts(response.data);
          getPendingQuestions(response.data);
        })

        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    [nbUsers]
  );

  const UnansweredPosts = (postsData) => {
    const nb = postsData.filter(
      (post) =>
        post.contenu_reponse == null || post.contenu_reponse.length == ""
    );

    setNbPostsUnanswered(nb.length);
  };

  const getPendingQuestions = (postsData) => {
    const nb = postsData.filter(
      (post) => post.publicated_at == null && post.disabled_by == null
    );

    setPendingQuestions(nb.length);
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Statistiques</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="8" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">
                          Nombres utilisateurs
                        </small>
                        <br />
                        <strong className="h4">{nbUsers}</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Nombre de posts</small>
                        <br />
                        <strong className="h4">{nbPosts}</strong>
                      </CCallout>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">
                          Questions sans réponses
                        </small>
                        <br />
                        <strong className="h4">{postsUnanswered}</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">
                          Questions à publier
                        </small>
                        <br />
                        <strong className="h4">{pendingQuestions}</strong>
                      </CCallout>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
