import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { Routes , Route} from "react-router-dom";
import UserList from "./components/UserList";
import {UserProvider} from './context/UserContext';
ReactDOM.render(
    <UserProvider>
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
              <Route path='register' element={<RegisterForm />} />
              <Route path='login' element={<LoginForm />} />
              <Route path="userlist" element={<UserList />} />
            </Route>
        </Routes>
    </Router>
    </UserProvider>,
    document.getElementById("root")
);
