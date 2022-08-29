import "./Background.css";
import Cursor from "./Cursor";
import People from "./Browser/People/People";

function Background() {

    return (
        <>
            <image id={"dark-image-container"} className={"window-container"}/>
            <Cursor/>
            <image id={"background-family-img"}>
                <People/>
            </image>
        </>
    );
}

export default Background;

/*
 <image className={"background-black"} />
            <Cursor />
 */