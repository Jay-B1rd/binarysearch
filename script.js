class Planet {
    constructor (name, ID, type, traveler) {
        this.name = name;
        this.ID = ID;
        this.type = type;
        this.traveler = traveler;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let eyeID = getRandomInt(993) + 6;

let ashTwin = new Planet("Ash Twin", 1, "Terran", "Hatchling");
let emberTwin = new Planet("Ember Twin", 2, "Terran", "Chert");
let timberHearth = new Planet("Timber Hearth", 3, "Terran", "Esker");
let brittleHollow = new Planet("Brittle Hollow", 4, "Hollow", "Riebeck");
let giantsDeep = new Planet("Giant's Deep", 5, "Gas Giant", "Gabbro");
let darkBramble = new Planet("Dark Bramble", 6, "Unknown", "Feldspar");
let eye = new Planet("Eye of the Universe", eyeID, "Unknown", "Solanum");

let planetList = [
    ashTwin,
    emberTwin,
    timberHearth,
    brittleHollow,
    giantsDeep,
    darkBramble,
    eye
];

function defineSearchTerm() {
    let inputElement = document.getElementById("inputID");
    let searchTerm = Number.parseFloat(inputElement.value);

    if (searchTerm > 6 && searchTerm !== eye.ID) {
        alert("Please enter a correct ID.");
    } else {
        console.log("correct id");
        return searchTerm;
    }

}

//this code. is not working. augh.
function searchByID() {
    let targetID = defineSearchTerm();
    console.log(`Searching for ID ${targetID}`);

    /*let low = planetList[0].ID;
    let high = planetList[5].ID;
    let mid = Math.round((low + high) / 2);

    while (planetList[mid].ID !== targetID) {
        if (targetID < planetList[mid].ID) {
            low = mid - 1;
        } else if (targetID > planetList[mid].ID) {
            high = mid + 1;
        }
        mid = Math.round((low + high) / 2);
    }

    if (planetList[mid].ID == targetID) {
        returnPlanet(mid);
    }*/

    let startIndex = 1;
    let endIndex = 6;
    let midpoint = Math.floor((startIndex + endIndex) / 2);
    console.log(`Midpoint is ${midpoint}`);

    while (planetList[midpoint].ID !== targetID) {
        if (targetID < planetList[midpoint].ID) {
            endIndex = midpoint - 1;
            console.log(`EndIndex is ${endIndex}`);
        } else if (targetID > planetList[midpoint].ID) {
            startIndex = midpoint + 1;
            console.log(`StartIndex is ${startIndex}`);
        }
        midpoint = Math.floor((startIndex + endIndex) / 2);
    }
    if (planetList[midpoint].ID == targetID) {
        returnPlanet(planetList[midpoint].ID);
        console.log(`Midpoint is ${midpoint}`);
    }
}

function returnPlanet(inputID) {
    let planetOutput = planetList[inputID];
    document.getElementById("outputName").innerHTML = planetOutput.name;
    document.getElementById("outputID").innerHTML = planetOutput.ID;
    document.getElementById("outputType").innerHTML = planetOutput.type;
    document.getElementById("outputTraveler").innerHTML = planetOutput.traveler;
}
