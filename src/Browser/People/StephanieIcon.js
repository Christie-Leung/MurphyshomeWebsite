import "./People.css"
import {useState} from "react";
import data from "./descriptions.json";

const StephanieIcon = () => {
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
            {data.stephanie[0].name}
            </body>
            <body className={"description"}>
            {data.stephanie[0].description}
            </body>
        </div>

    return (
        <>
            <div id={"stephanie-identifier"} className={"icon-identifier"} onMouseEnter={mOver} onMouseLeave={mOut}>
                {description}
            </div>
        </>
    )
}


export default StephanieIcon;