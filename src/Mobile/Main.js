import "./main.css";
import "../Browser/MenuBar/Menubar.css"
import {Link} from "react-router-dom";
import data from "../Browser/People/descriptions.json"
import MenuBar from "../Browser/MenuBar/MenuBar";

export default function Main() {

    const patty =
        <Link to={"/profile/patty"} key={"patty"}>
            <div className={"person-container"} style={{marginRight: "auto"}}>
                <image className={"circle-icon"} id={"Patty-icon"}/>
                <div className={"text-container"}>
                    <text className={"name"}>{data.patty[0].name}</text>
                    <br/>
                    <text style={{width: "50vw", display: "block"}}
                          className={"description"}>{data.patty[0].description}</text>
                </div>
            </div>
        </Link>

    const murphy =
        <Link to={"/profile/murphy"} key={"murphy"}>
            <div className={"person-container"}>
                <div className={"text-container"} style={{marginLeft: "auto"}}>
                    <text className={"name"}>{data.murphy[0].name}</text>
                    <br/>
                    <text style={{width: "50vw", display: "block"}}
                          className={"description"}>{data.murphy[0].description}</text>
                </div>
                <image className={"circle-icon"} id={"Murphy-icon"}/>
            </div>
        </Link>

    const christie =
        <Link to={"/profile/christie"} key={"christie"}>
            <div className={"person-container"} style={{marginRight: "auto"}}>
                <image className={"circle-icon"} id={"Christie-icon"}/>
                <div className={"text-container"}>
                    <text className={"name"}>{data.christie[0].name}</text>
                    <br/>
                    <text style={{width: "50vw", display: "block"}}
                          className={"description"}>{data.christie[0].description}</text>
                </div>
            </div>
        </Link>

    const stephanie =
        <Link to={"/profile/stephanie"} key={"stephanie"}>
            <div className={"person-container"}>
                <div className={"text-container"} style={{marginLeft: "auto"}}>
                    <text className={"name"}>{data.stephanie[0].name}</text>
                    <br/>
                    <text style={{width: "50vw", display: "block"}}
                          className={"description"}>{data.stephanie[0].description}</text>
                </div>
                <image className={"circle-icon"} id={"Stephanie-icon"}/>
            </div>
        </Link>

    const header =
        <main className={"header-container"}
              style={{position: "relative", color: "transparent", backgroundColor: "transparent"}}>
            <header style={{color: "transparent"}}>Murphyshome</header>
        </main>

    return (
        <>
            <main id={"web-main-page"} className={"window-container"}>
                <main className={"body-container"}>
                    {header}
                    {patty}
                    {murphy}
                    {christie}
                    {stephanie}
                    <MenuBar/>
                </main>
            </main>
        </>
    )
}