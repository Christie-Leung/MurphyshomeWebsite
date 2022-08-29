const fs = require("fs")

let year = new Date().getFullYear()

let timeline = {};

for (let i = 2003; i <= year; i++) {
    let year = [];

    for (let j = 1; j <= 12; j++) {
        let dict = {};
        dict[j] = [["", "", ""]]
        year[j - 1] = dict
    }
    timeline[i] = year
}

fs.writeFile("timeline.json", JSON.stringify(timeline), function (err) {
        if (err) throw err;
        console.log('complete');
    }
);

process.exitCode = 1;
