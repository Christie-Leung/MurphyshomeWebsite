import "./Menubar.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";
import "../../Mobile/main.css"

function MenuBar({page}) {

    let homeButton;
    if (page === "/") {
        homeButton =
            <Link to={"/"}>
                <button id={"home-icon"} className={"menubar-icon"}/>
            </Link>
    } else {
        homeButton =
            <Link to={"/"}>
                <button id={"home-icon"} className={"menubar-icon"}/>
            </Link>
    }

    const [menuState, setMenuState] = useState(false)
    const [profileState, setProfileState] = useState(false)

    const handleMenuToggle = () => {
        if (profileState) {
            setProfileState(!profileState)
        }
        setMenuState(!menuState);
    }

    const handleProfileToggle = () => {
        if (menuState) {
            setMenuState(!menuState)
        }
        setProfileState(!profileState)
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMouseclick = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const openedMenu =
        <div style={{
            position: "fixed",
            height: "fit-content",
            display: "block"
        }}>
            <main className={"header-container"} style={{position: "relative"}}>
                <header>Murphyshome</header>
                <button id={"menu-icon"} className={"menubar-icon"}
                        onClick={toggleMouseclick}
                        style={{
                            position: "relative",
                            right: "5vw",
                            maskSize: "contain",
                            marginLeft: "auto",
                            marginTop: "auto",
                            marginBottom: "auto",
                            backgroundSize: "cover",
                            top: "1.2vw",
                            rotate: "90deg"
                        }}/>
            </main>
            <main className={"button-container"}>
                <Link to={"/photoGallery"}>
                    <button className={"misc-text"}>Photo Gallery</button>
                </Link>
                <br/>
                <Link to={"/hobbies"}>
                    <button className={"misc-text"}>Hobbies</button>
                </Link>
                <br/>
                <Link to={"/links"}>
                    <button className={"misc-text"} style={{marginBottom: "4vw"}}>Links</button>
                </Link>
            </main>
        </div>

    const closedMenu =
        <main className={"header-container"}>
            <header>Murphyshome</header>
            <button id={"menu-icon"} className={"menubar-icon"}
                    onClick={toggleMouseclick}
                    style={{
                        position: "relative",
                        right: "5vw",
                        maskSize: "contain",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                        backgroundSize: "cover",
                        top: "1.2vw",
                    }}/>
        </main>

    if (isMobile) {
        return (
            <>
                {isMenuOpen ? openedMenu : closedMenu}
            </>
        );
    } else {
        return (
            <>
                {menuState ?
                    (<div id={"opened-menu"} className={"Menu-bar-rect"}>
                        <main className={"text-container"} style={{bottom: "4vh"}}>
                            <Link to={"/photoGallery"}>
                                <button id={"menu"} className={"text-button"} style={{
                                    marginTop: "1vh",
                                    fontSize: "max(0.8vh, 1.6vw)"
                                }}>Photo Gallery
                                </button>
                            </Link>
                            <Link to={"/hobbies"}>
                                <button id={"menu"} className={"text-button"}
                                        style={{fontSize: "max(0.8vh, 1.6vw)"}}>Hobbies
                                </button>
                            </Link>
                            <Link to={"/links"}>
                                <button id={"menu"} className={"text-button"}
                                        style={{fontSize: "max(0.8vh, 1.6vw)"}}>Links
                                </button>
                            </Link>
                        </main>
                        <main className={"icon-bar"}>
                            {homeButton}
                            <button id={"profile-icon"} className={"menubar-icon"} onClick={handleProfileToggle}/>
                            <button id={"menu-icon"} className={"menubar-icon"} onClick={handleMenuToggle}
                                    style={{transform: "rotate(90deg)"}}/>
                        </main>
                    </div>) :
                    (profileState ?
                            (<div id={"opened-profile"} className={"Menu-bar-rect"}>
                                <main className={"text-container"} style={{bottom: "calc(min(38vh, 30vw) - 15vh)"}}>
                                    <Link to="/profile/patty" key={"patty"}>
                                        <button id={"profile"} className={"text-button"}
                                                style={{marginTop: "1vh",}}>Patty
                                        </button>
                                    </Link>
                                    <Link to="/profile/murphy" key={"murphy"}>
                                        <button id={"profile"} className={"text-button"}>Murphy</button>
                                    </Link>
                                    <Link to="/profile/christie" key={"christie"}>
                                        <button id={"profile"} className={"text-button"}>Christie</button>
                                    </Link>
                                    <Link to="/profile/stephanie" key={"stephanie"}>
                                        <button id={"profile"} className={"text-button"}>Stephanie</button>
                                    </Link>
                                </main>
                                <main className={"icon-bar"}>
                                    {homeButton}
                                    <button id={"profile-icon"} className={"menubar-icon"}
                                            style={{maskSize: "min(4.5vh, 3.5vw)"}} onClick={handleProfileToggle}/>
                                    <button id={"menu-icon"} className={"menubar-icon"} onClick={handleMenuToggle}/>
                                </main>
                            </div>) :
                            (<div className={"Menu-bar-rect"} style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                {homeButton}
                                <button id={"profile-icon"} className={"menubar-icon"} onClick={handleProfileToggle}/>
                                <button id={"menu-icon"} className={"menubar-icon"} onClick={handleMenuToggle}/>
                            </div>)
                    )
                }
            </>
        );
    }
}

export default MenuBar;

/*
{ menuState ?
                (<div className={"Menu-bar-rect-menu-open"}>
                <main className={"text-container"} style={{ bottom: "4vh"}}>
                    <button id={"menu"} className={"text-button"} style={{ marginTop: "1vh", fontSize: "max(1.2vh, 2.2vw)" }}>Photo Gallery</button>
                    <button id={"menu"} className={"text-button"} style={{ fontSize: "max(1.2vh, 2.2vw)" }}>Hobbies</button>
                    <button id={"menu"} className={"text-button"} style={{ fontSize: "max(1.2vh, 2.2vw)" }}>Links</button>
                </main>
                <main className={"icon-bar"}>
                    <button className={"Menu-main"} />
                    <button className={"Menu-profile"} onClick={handleProfileToggle}/>
                    <button id={"Menu-icon"} className={"Menu-icon"} onClick={handleMenuToggle}
                         style={{ transform: "rotate(90deg)", marginLeft: "5vw"}}/>
                </main>
            </div>) :
                ( profileState ?
                    (<div className={"Menu-bar-rect-profile-open"}>
                <main className={"text-container"} style={{ bottom: "calc(min(38vh, 30vw) - 15vh)"}}>
                    <button id={"profile"} className={"text-button"} style={{ marginTop: "1vh",}}>PattyIcon</button>
                    <button id={"profile"} className={"text-button"} style={{  }}>MurphyIcon</button>
                    <button id={"profile"} className={"text-button"} style={{  }}>ChristieIcon</button>
                    <button id={"profile"} className={"text-button"} style={{  }}>StephanieIcon</button>
                </main>
                <main className={"icon-bar"}>
                    <button className={"Menu-main"}/>
                    <button className={"Menu-profile"} style={{maskSize: "min(4.5vh, 3.5vw)"}} onClick={handleProfileToggle}/>
                    <button className={"Menu-icon"} onClick={handleMenuToggle}/>
                </main>
            </div>) :
                    (<div className={"Menu-bar-rect"}>
                        <button className={"Menu-main"} />
                        <button className={"Menu-profile"} onClick={handleProfileToggle}/>
                        <button className={"Menu-icon"} onClick={handleMenuToggle}/>
                    </div>)
                )
            }
 */


/*
const toggleMenu = () => {
    if (menuState || profileState) {
        setMenuBar(defaultMenu)
    } else {
        if (!profileState) {
            setMenuBar(
                <div className={"Menu-bar-rect-profile-open"}>
                    <main className={"text-container"}>
                        <button className={"text-button"} style={{ marginTop: "1vh" }}>PattyIcon</button>
                        <button className={"text-button"}>MurphyIcon</button>
                        <button className={"text-button"}>ChristieIcon</button>
                        <button className={"text-button"}>StephanieIcon</button>
                    </main>
                    <main className={"icon-bar"}>
                        <button className={"Menu-main"}/>
                        <button className={"Menu-profile"} style={{maskSize: "min(4.5vh, 3.5vw)"}} onClick={toggleMenu}/>
                        <button className={"Menu-icon"} onClick={toggleMenu}/>
                    </main>
                </div>
            )
            setProfileState({profileState: !profileState});
        } else {
             setMenuBar(
                <div className={"Menu-bar-rect-menu-open"}>
                    <div className={"text-container"}>
                        <button className={"text-button"} style={{ marginTop: "2vh" }}>Photo Gallery</button>
                        <button className={"text-button"}>Hobbies</button>
                        <button className={"text-button"}>Links</button>
                    </div>
                    <div className={"icon-bar"}>
                        <button className={"Menu-main"} />
                        <button className={"Menu-profile"} onClick={toggleMenu}/>
                        <button id={"Menu-icon"} className={"Menu-icon"} onClick={toggleMenu}
                             style={{ transform: "rotate(90deg)", marginLeft: "5vw"}}/>
                    </div>
                </div>
            )
            setMenuState({menuState: !menuState});
        }
    }
}

const defaultMenu =
    <div className={"Menu-bar-rect"}>
        <button className={"Menu-main"} />
        <button className={"Menu-profile"} onClick={toggleMenu}/>
        <button className={"Menu-icon"} onClick={toggleMenu}/>
    </div>

setMenuBar(defaultMenu)
*/
