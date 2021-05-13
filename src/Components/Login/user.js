import React from 'react';
import {Authorization} from './App';
import axios from 'axios';
import cookie from 'js-cookies'
const loginDB = (id, password) => {
    return function (dispatch, getState, { history }) {
      axios({
        method: "post",
        url: "http://http://172.19.213.142//",
        data: {
          email: id,
          password: password,
        },
      })
        .then((res) => {
          console.log(res);
          dispatch(
            setUser({
              email: res.data.email,
              nickname: res.data.nickname,
            })
          );
          const accessToken = res.data.token;
          //쿠키에 토큰 저장
          setCookie("is_login", `${accessToken}`);
          document.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };