import "./People.css"
import {useState} from "react";
import data from "./descriptions.json"

const ChristieIcon = () => {
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
        <div id={"left-popup"} className={"popup-name-container"} style={{
            width: "min(46vw, 1000px)"
        }} onMouseEnter={mOut}>
            <body className={"name"}>
            {data.christie[0].name}
            </body>
            <body className={"description"}>
            {data.christie[0].description}
            </body>
        </div>

    return (
        <>
            <div id={"christie-identifier"} className={"icon-identifier"} onMouseEnter={mOver} onMouseLeave={mOut}>
                {description}
            </div>
        </>
    )
}

export default ChristieIcon;