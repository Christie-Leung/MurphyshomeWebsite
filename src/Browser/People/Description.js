import "./People.css"
import json from './descriptions.json'


function genDescription(Name) {

    const jsonData = JSON.parse(JSON.stringify(json))


    let description;
    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].name === Name) {
            description = jsonData[i].description;
        }
    }


    return (
        <>
            <div className={"name-container"}>
                <body className={"name"}>
                {Name}
                </body>
                <body className={"description"}>
                {description}
                </body>
            </div>
        </>
    );
}

export default genDescription();