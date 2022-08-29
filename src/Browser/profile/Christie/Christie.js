import MenuBar from "../../MenuBar/MenuBar";
import "./christie.css"
import {useState} from "react";
import {isMobile} from "react-device-detect";
import "../../../Mobile/Main"

/*import data from "./timeline.json"*/

export default function Christie() {

    const [discord, setDiscord] = useState(<></>)

    const onMouseHover = (el) => {
        setDiscord(<text style={{left: `calc(${el.clientX}px - 5vw)`, top: `calc(${el.clientY}px + 2.5vh)`}}
                         className={"hover-description-bar"}>Keyla#3048</text>)
    }
    const onMouseLeave = () => {
        setDiscord(<></>)
    }

    let direction, bckgrdSize, maskSize, height;

    if (isMobile) {
        direction = "column"
        bckgrdSize = "90vh"
        maskSize = "55vh"
        height = "fit-content"
    } else {
        direction = "row"
        bckgrdSize = "65vh"
        maskSize = "40vh"
        height = "40vh"
    }

    return (
        <>
            <div className={"window-container"} style={{
                backgroundColor: "#141313",
                display: "flex",
                alignItems: "center"
            }}>
                <div id={"christie-container"} style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: direction
                }}>
                    <image style={{
                        backgroundSize: bckgrdSize,
                        maskSize: maskSize,
                        webkitMaskSize: maskSize,
                        width: maskSize,
                        height: maskSize,
                    }} id={"christie-picture"}/>
                    <div className={"text-container"} style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        height: height,
                        justifyContent: "center"
                    }}>
                        <text className={"name"} id={"christie-name"}>Christie Leung</text>
                        <text className={"description"}>Aspiring software developer, music producer, entrepreneur
                        </text>
                        <div className={"connect-button-container"}>
                            <a href={"https://www.instagram.com/christie_leungg/"} target={"_blank"} id={"a-icons"}
                               rel="noreferrer">
                                <button className={"icons"} id={"insta-icon"}/>
                            </a>
                            <a href={"https://www.linkedin.com/in/christie-leung-dev/"} target={"_blank"}
                               id={"a-icons"}
                               rel="noreferrer">
                                <button className={"icons"} id={"linkedin-icon"}/>
                            </a>
                            <a href={"https://github.com/Christie-Leung"} target={"_blank"} id={"a-icons"}
                               rel="noreferrer">
                                <button className={"icons"} id={"github-icon"}/>
                            </a>
                            <a href={"https://open.spotify.com/user/c.leung1234567890?si=794d868c004c43e3"}
                               target={"_blank"} id={"a-icons"}
                               rel="noreferrer">
                                <button className={"icons"} id={"spotify-icon"}/>
                            </a>
                            <a href={"https://discord.com/users/301028982684516352/"}
                               target={"_blank"} id={"a-icons"}
                               rel="noreferrer">
                                <button className={"icons"} id={"discord-icon"}/>
                            </a>
                        </div>
                    </div>
                </div>
                <MenuBar page={"/"}/>
            </div>
        </>
    );
}

/*

function getMonthString(month) {
    const months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    }
    return months[month]
}

function filterTimeline(filterString) {

    let nonEmptyTimeline = [];
    for (let year = 2003; year < Object.keys(data).length + 2003; year++) {
        for (let month = 1; month <= 12; month++) {
            let tempDict = [];
            let descriptions = [];
            if (data[year.toString()][month-1][month.toString()][0][0] !== "") {
                if (filterString === "any" ? true : data[year.toString()][month - 1][month.toString()][0][1] === filterString) {
                    for (let j = 0; j < Object.keys(data[year.toString()][month - 1][month.toString()]).length; j++) {
                        descriptions.push([data[year.toString()][month - 1][month.toString()][j][0], data[year.toString()][month - 1][month.toString()][j][2]])
                    }
                    tempDict[0] = getMonthString(month) + " " + year.toString()
                    tempDict[1] = descriptions
                    nonEmptyTimeline.push(tempDict)
                }
            }
        }
    }
    return nonEmptyTimeline.reverse();

}

 */

/*

    const timelineContainer = filterTimeline("")

    console.log(timelineContainer)

    const [page , setPage] = useState({timeline: true, programming: false, music: false, forFun: false, page: filterTimeline("")})
    const [imageActive, setImageActive] = useState(null);

    const toggleTimeline = () => {
        setPage({timeline: true, programming: false, music: false, forFun: false, page: filterTimeline("any")})
    }

    const toggleProgramming = () => {
         setPage({timeline: false, programming: true, music: false, forFun: false, page: filterTimeline("programming")})
    }

    const toggleMusic = () => {
        setPage({timeline: false, programming: false, music: true, forFun: false, page: filterTimeline("music")})
    }

    const toggleForFun = () => {
        setPage({timeline: false, programming: false, music: false, forFun: true, page: filterTimeline("forFun")})
    }

    const gojo = "../../../img/gojo.gif"

    const showImage = (img) => {
        if (img !== "") {
            setImageActive(<img src={require(gojo)} alt={""} style={{
                width: "500px",
                height: "200px",
                display: "block",
            }} /> )
        }
        console.log("clicked")
    }
 */

/*
  return (
        <>
            <div className={"window-container"} style={{ backgroundColor: "#074A66" }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, #031E29 0%, rgba(196, 196, 196, 0) 100%)",
                    overflowY: "scroll",
                }}>
                    <div id={"christie-container"}>
                        <image id={"christie-picture"}/>
                        <div id={"half-header-container"}>
                            <div className={"navbar"}>
                                <button className={page.timeline ? "nav-button-active" : "nav-button"} onClick={toggleTimeline}>Timeline</button>
                                <button className={page.programming ? "nav-button-active" : "nav-button"} onClick={toggleProgramming}>Programming</button>
                                <button className={page.music ? "nav-button-active" : "nav-button"} onClick={toggleMusic}>Music</button>
                                <button className={page.forFun ? "nav-button-active" : "nav-button"} onClick={toggleForFun}>For Fun</button>
                            </div>
                            <div className={"text-container"} style={{
                                position: "relative",
                                marginTop: "auto",
                                marginBottom: "auto",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <text className={"name"} id={"christie-name"}>Christie Leung</text>
                                <br/>
                                <text className={"description"}>Aspiring software developer, music producer, entrepreneur</text>
                                <div className={"connect-button-container"}>
                                     <a href={"https://www.instagram.com/christie_leungg/"} target={"_blank"} id={"a-icons"} rel="noreferrer">
                                        <button className={"icons"} id={"insta-icon"}/>
                                    </a>
                                    <a href={"https://www.linkedin.com/in/christie-leung-dev/"} target={"_blank"} id={"a-icons"} rel="noreferrer">
                                        <button className={"icons"} id={"linkedin-icon"}/>
                                    </a>
                                    <a href={"https://github.com/Christie-Leung"} target={"_blank"} id={"a-icons"} rel="noreferrer">
                                        <button className={"icons"} id={"github-icon"}/>
                                    </a>
                                    <button className={"icons"} id={"discord-icon"} style={{
                                        width: "100%",
                                        height: "4vh",
                                        marginTop: "2%",
                                        marginRight: "12%",
                                        marginBottom: "25%",
                                        padding: 0,
                                    }}/>
                                    <a href={"https://open.spotify.com/user/c.leung1234567890?si=794d868c004c43e3"} target={"_blank"} id={"a-icons"} rel="noreferrer">
                                        <button className={"icons"} id={"spotify-icon"}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={"timeline-container"}>
                        <div style={{
                            width: "50%",
                            height: "fit-content",
                            position: "relative",
                            borderImage: "linear-gradient(#F9F5F4 0%, rgba(249, 245, 244, 0.09) 20%) 0 100 0 0 / 1px / 0 stretch"

                        }}>
                            <>
                                {page.page.filter((a, i) => i % 2 === 0).map((monthYear, index) =>
                                    <div style={{
                                        marginLeft: "auto",
                                        width: "fit-content",
                                        marginRight: "1%",
                                        marginTop: "5%",
                                        marginBottom: "5%",
                                        height: "fit-content",
                                    }}>
                                        <text className={"month-year"} id={index % 2 !== 0 ? "transparent" : ""}>{monthYear[0]}</text>
                                        <ul className={"year-descriptions"} id={index % 2 !== 0 ? "transparent" : ""}>
                                            {monthYear[1].map(description => <li onClick={() => showImage(description[1])}>{description[0]}</li>)}
                                        </ul>

                                        <div>{imageActive}</div>
                                    </div>)
                                }
                            </>
                        </div>
                        <div style={{
                            width: "50%",
                            height: "100%",
                            position: "relative",
                        }}>
                            <>
                                {page.page.map((monthYear, index) =>
                                    <div style={{
                                        marginRight: "auto",
                                        width: "fit-content",
                                        marginLeft: "1%",
                                        marginTop: "5%",
                                        marginBottom: "5%",
                                        height: "fit-content",
                                    }}>
                                        <text className={"month-year"} id={index % 2 === 0 ? "transparent" : ""}>{monthYear[0]}</text>
                                        <ul className={"year-descriptions"} id={index % 2 === 0 ? "transparent" : ""}>
                                            {monthYear[1].map(description => <li onClick={() => showImage(description[1])}>{description[0]}</li>)}
                                        </ul>
                                        <div>{imageActive}</div>
                                    </div>)
                                }
                            </>
                        </div>
                    </div>
                    <MenuBar page={"/"}/>
                </div>
            </div>
        </>
  );
 */