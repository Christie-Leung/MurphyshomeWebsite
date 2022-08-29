import {useParams} from "react-router-dom";
import Patty from "./Patty/Patty";
import Murphy from "./Murphy/Murphy";
import Christie from "./Christie/Christie";
import Stephanie from "./Stephanie/Stephanie";

export default function ProfileManager() {
    let params = useParams();
    let name = params.name;

    if (name.toUpperCase() === "PATTY") {
        return <Patty/>
    }
    if (name.toUpperCase() === "MURPHY") {
        return <Murphy/>
    }
    if (name.toUpperCase() === "CHRISTIE") {
        return <Christie/>
    }
    if (name.toUpperCase() === "STEPHANIE") {
        return <Stephanie/>
    }

}