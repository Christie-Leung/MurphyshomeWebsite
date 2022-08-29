import MenuBar from "../../MenuBar/MenuBar";
import "./stephanie.css"

export default function Stephanie() {
    return (
        <>
            <div className={"window-container"}>
                <main style={{position: "fixed"}}>
                    <text>Stephanie</text>
                    <br/>
                    <text>I am failing my chem 35 :></text>
                    <br/>
                    <header style={{color: "black"}}>BUT MY AVERAGE WENT UP</header>
                </main>
                <MenuBar page={"/home"}/>
            </div>
        </>
    )
}