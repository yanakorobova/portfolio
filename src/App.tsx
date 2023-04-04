import React from 'react';
import {Header} from "components/sections/Header/Header";
import {Projects} from "components/sections/Projects/Projects";
import {Contacts} from "components/sections/Contacts/Contacts";
import {Intro} from "components/sections/Intro/Intro";

function App() {
    return (
        <div className="App">
            <Header/>
            <Intro/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
