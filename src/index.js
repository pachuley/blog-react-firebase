import React from "react"
import ReactDOM from "react-dom"
import App from "../components/App";
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <Router>    
        <App />
    </Router>,
document.getElementById("root"))