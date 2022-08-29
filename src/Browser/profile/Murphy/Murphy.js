import MenuBar from "../../MenuBar/MenuBar";
import data from "./test.json"

export default function Murphy() {
    console.log(data.Murphy[0].name)

    return (
        <>
            <div className={"window-container"}>
                <div style={{
                    width: "500px",
                    height: "100px",
                    borderImage: "linear-gradient(#F9F5F4, rgba(249, 245, 244, 0.09)) 0 100 0 0 / 15px / 0 stretch"
                }}>
                    <text>{data.Murphy[0].name}</text>
                    <img src={require("../../../img/gojo.gif")} alt={""}/>
                </div>
            </div>
            <MenuBar page={"/"}/>
        </>
    )
}