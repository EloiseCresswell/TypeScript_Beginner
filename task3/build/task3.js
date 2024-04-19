"use strict";
let musical = {
    name: "Hamilton",
    firstPerformed: 2015,
    stillShown: true,
    mainActors: [
        "Renée Elise Goldsberry",
        "Leslie Odom Jr.",
        "Phillipa Soo",
        "Jonathan Groff",
        "Daveed Diggs",
        "Chris Jackson",
        "Lin-Manuel Miranda",
    ],
};
let personWatching = "Put your name here!";
let numberOfFriends = 12;
let theatreCapacity = 1000;
let numberofTicketsSold = 980;
let ticketsLeft = 0;
function remainingTickets(theatreCapacity, numberofTicketsSold) {
    ticketsLeft = theatreCapacity - numberofTicketsSold;
    return ticketsLeft;
}
remainingTickets(theatreCapacity, numberofTicketsSold);
function isThereEnoughTickets(ticketsLeft, numberofFriends) {
    if (ticketsLeft > numberofFriends)
        return true;
    else
        return false;
}
let enoughTicketsAnswer = isThereEnoughTickets(ticketsLeft, numberOfFriends);
function finalReturn(enoughTicketsAnswer, musical, personWatching, numberOfFriends) {
    let musicalCrew = "";
    if (enoughTicketsAnswer === true) {
        musicalCrew = `${personWatching} is going to watch ${musical.name} with their ${numberOfFriends} friends. They are most excited to see ${musical.mainActors[2]} perform!`;
    }
    else {
        musicalCrew = `${personWatching} is not going to watch ${musical.name} with their ${numberOfFriends} friends! The theatre is full! Maybe next time...`;
    }
    console.log(musicalCrew);
    return musicalCrew;
}
finalReturn(enoughTicketsAnswer, musical, personWatching, numberOfFriends);
