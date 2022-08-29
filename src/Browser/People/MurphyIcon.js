import "./People.css"
import {useState} from "react";
import data from "./descriptions.json";

const MurphyIcon = () => {
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
        <div id={"left-popup"} className={"popup-name-container"} onMouseEnter={mOut}>
            <body className={"name"}>
            {data.murphy[0].name}
            </body>
            <body className={"description"}>
            {data.murphy[0].description}
            </body>
        </div>

    return (
        <>
            <div id={"murphy-identifier"} className={"icon-identifier"} onMouseEnter={mOver} onMouseLeave={mOut}>
                {description}
            </div>
        </>
    )
}

export default MurphyIcon;