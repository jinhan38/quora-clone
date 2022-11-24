import React from 'react';
import './App.css';
import Quora from "./Quora";
import Login from "./Login";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function App() {
    const user = useSelector(selectUser);
    return (<div className="App">
            {user ? (<Quora/>) : (<Login/>)}
        </div>);
}

export default App;
