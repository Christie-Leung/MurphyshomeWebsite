import "./Background.css";
import {useEffect, useState} from "react";


const Cursor = () => {
    const [MaskPosition, setMaskPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const addEventListener = () => {
            document.addEventListener('mousemove', mMove);
        };

        const removeEventListener = () => {
            document.removeEventListener('mousemove', mMove);
        };

        const mMove = (el) => {
            setMaskPosition({x: el.clientX, y: el.clientY});
        };

        addEventListener();
        return () => removeEventListener();
    }, []);


    return (
        <div
            className={'cursor'}
            style={{
                maskPosition: `${MaskPosition.x}px calc(${MaskPosition.y}px - 8.5vw)`,
                WebkitMaskPosition: `${MaskPosition.x}px calc(${MaskPosition.y}px - 8.5vw)`,
                //maskPosition: `21vw 12vh`,
            }}
        />
    )
}

export default Cursor;