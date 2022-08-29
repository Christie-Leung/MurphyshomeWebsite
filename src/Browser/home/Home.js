import "./home.css"
import MenuBar from "../MenuBar/MenuBar";
import {useState} from "react";


export default function Home() {

    let year = new Date().getFullYear();

    const [value, setValue] = useState(year * 10)
    const updateSlider = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <main className={"window-container"} style={{backgroundColor: "#d7cfcc"}}>
                <header id={"murphyshome"}>Murphyshome</header>
                <div className={"timeline-container"}>
                    <div className={"component-container"}>
                        <image id={"c1"} className={"component"}/>
                        <image id={"c2"} className={"component"}/>
                        <image id={"c3"} className={"component"}/>
                        <image id={"c4"} className={"component"}/>
                        <image id={"c5"} className={"component"}/>
                        <image id={"c6"} className={"component"}/>
                        <image id={"c7"} className={"component"}/>
                    </div>
                    <div className={"slide-container"}>
                        <input type={"range"} min={20030} max={20220} value={value} className={"slider"}
                               onChange={updateSlider}/>
                        <text style={{left: "0"}} className={"year-text"}>2003</text>
                        <text style={{right: "2%"}} className={"year-text"}>{year.toString()}</text>
                    </div>
                </div>
                <MenuBar page={"/home"}/>
            </main>

        </>
    )
}