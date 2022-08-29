import MenuBar from "../../MenuBar/MenuBar";
import "./photoGallery.css"
import {useState} from "react";

export default function PhotoGallery() {

    let calendar = ["Calendar", "#251F1A", "gallery1"]
    let loveAlbum = ["Love Album", "#2E2014", "gallery2"]
    let osaka = ["Travel - Osaka", "#2F353C", "gallery3"]
    let tokyo = ["Travel - Tokyo", "#000706", "gallery4"]
    let europe = ["Travel - Europe", "#333539", "gallery5"]


    const components = [calendar, loveAlbum, osaka, tokyo, europe]

    const [index, setIndex] = useState(0);
    const [leftIndex, setLeftIndex] = useState(components.length - 1);
    const [rightIndex, setRightIndex] = useState(1);

    const onShiftRight = () => {
        if (index === (components.length - 1)) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }

        if (leftIndex === (components.length - 1)) {
            setLeftIndex(0)
        } else {
            setLeftIndex(leftIndex + 1)
        }

        if (rightIndex === (components.length - 1)) {
            setRightIndex(0)
        } else {
            setRightIndex(rightIndex + 1)
        }
    }

    const onShiftLeft = () => {
        if (index === 0) {
            setIndex(components.length - 1)
        } else {
            setIndex(index - 1)
        }

        if (leftIndex === 0) {
            setLeftIndex(components.length - 1)
        } else {
            setLeftIndex(leftIndex - 1)
        }

        if (rightIndex === 0) {
            setRightIndex(components.length - 1)
        } else {
            setRightIndex(rightIndex - 1)
        }
    }

    return (
        <div className={"window-container"} style={{
            backgroundColor: "#FBF9F9",
        }}>
            <div className={"web-header-container"}>
                <image className={"logo"}/>
                <text id={"photoGallery-text"}>Photo Gallery</text>
            </div>
            <div className={"web-body-container"}>
                <button className={"arrow"} onClick={onShiftLeft} style={{
                    left: "3%",
                }}/>
                <div className={"picture-card-component"} id={"left"}>
                    <text className={"picture-text"}></text>
                    <image className={"picture-card"} id={components[leftIndex][2]}/>
                </div>
                <div className={"picture-card-component"} id={"center"}>
                    <text className={"picture-text"} style={{
                        color: components[index][1],
                    }}>{components[index][0]}</text>
                    <image id={components[index][2]} className={"picture-card"}/>
                </div>
                <div className={"picture-card-component"} id={"right"}>
                    <text className={"picture-text"}></text>
                    <image className={"picture-card"} id={components[rightIndex][2]}/>
                </div>
                <button className={"arrow"} onClick={onShiftRight} style={{
                    transform: "rotate(180deg)",
                    right: "3%",
                }}/>
            </div>
            <MenuBar page={"/home"}/>
        </div>
    )
}