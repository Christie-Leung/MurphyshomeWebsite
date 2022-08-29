import './App.css';
import Background from './Background.js'
import MenuBar from "./Browser/MenuBar/MenuBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileManager from "./Browser/profile/ProfileManager";
import PhotoGallery from "./Browser/misc/photoGallery/PhotoGallery";
import Links from "./Browser/misc/Links";
import Hobbies from "./Browser/misc/hobbies/Hobbies";
import Home from "./Browser/home/Home";
import {isMobile} from "react-device-detect";
import Main from "./Mobile/Main";

export default function MyApp() {

    if (isMobile) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/profile/:name"} element={<ProfileManager/>}/>
                    <Route exact path={"/photoGallery"} element={<PhotoGallery/>}/>
                    <Route exact path={"/links"} element={<Links/>}/>
                    <Route exact path={"/hobbies"} element={<Hobbies/>}/>
                    <Route exact path={"/"} element={
                        <Main/>
                    }/>
                    <Route exact path={"*"} element={
                        <>
                            <main>This page doesn't exist</main>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/profile/:name"} element={<ProfileManager/>}/>
                    <Route exact path={"/photoGallery"} element={<PhotoGallery/>}/>
                    <Route exact path={"/links"} element={<Links/>}/>
                    <Route exact path={"/hobbies"} element={<Hobbies/>}/>
                    <Route exact path={"/home"} element={<Home/>}/>
                    <Route exact path={"/"} element={
                        <>
                            <Background/>
                            <MenuBar page={"/"}/>
                        </>
                    }/>
                    <Route exact path={"*"} element={
                        <>
                            <main>This page does not exist!</main>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        );
    }

}

/*

 */