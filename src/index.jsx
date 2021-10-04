// import "babel-polyfill";
// import cssVars from "css-vars-ponyfill";

import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'
import App from './app/App'
import {Provider} from "react-redux"
import { Store } from 'app/redux/Store'
//axios.defaults.baseURL='https://192.168.10.3:7000/qsend-api/v1/'

// cssVars();
const accessToken=localStorage.getItem('accessToken')

//axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
axios.defaults.headers.common['X-Authorization'] = `Bearer ${accessToken}`
ReactDOM.render(
       <Provider store={Store}>
          <App />
    </Provider>,
     document.getElementById('root'))

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
