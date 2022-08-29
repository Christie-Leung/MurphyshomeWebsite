import "./People.css"
import {useState} from "react";
import data from "./descriptions.json";

const PattyIcon = () => {
    /*
        const descriptionEl = genDescription("MurphyIcon Leung")
     */
    const [description, setDescription] = useState(<div/>)

    const mOver = () => {
        setDescription(descriptionEl)
    };
    const mOut = () => {
        setDescription(<div/>)
    };

    const descriptionEl =
        <div id={"right-popup"} className={"popup-name-container"} onMouseEnter={mOut}>
            <body className={"name"}>
            {data.patty[0].name}
            </body>
            <body className={"description"}>
            {data.patty[0].description}
            </body>
        </div>

    return (
        <>
            <div id={"patty-identifier"} className={"icon-identifier"} onMouseEnter={mOver} onMouseLeave={mOut}>
                {description}
            </div>
        </>
    )
}


export default PattyIcon;