import React from 'react';
import {Header} from "components/sections/Header/Header";
import {Projects} from "components/sections/Projects/Projects";
import {Contacts} from "components/sections/Contacts/Contacts";
import {Preloader} from "components/common/Preloader/Preloader";
import {Skills} from "components/sections/Skills/Skills";
import {Intro} from "components/sections/Intro/Intro";
import {ParticlesContainer} from "./components/common/Particles/ParticlesContainer";

function App() {
    return (
        <>
            <Preloader/>
            <Header/>
            <Intro/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <ParticlesContainer/>
        </>
    );
}

export default App;
