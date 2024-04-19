//task 3
//I seem to have muddled myself writing this, please help me fix it! 
//Word of warning, there is also spelling errors 
//Change the name variable to add your name!
//When you're happy run dev to test if it is working and set up a live server and head to the console to see the results!
//You've got this, break it down step by step 💪

type musicalObject = {
  name: number;
  firstPerformed: number;
  stillShown: boolean;
  mainActors: <array>strinf;
};

let musical: musicalObject = {
  name: "Hamilton",
  firstPerformed: 2015,
  stillShown: 5,
  mainActors: [
    "Renée Elise Goldsberry",
    "Leslie Odom Jr.",
    "Phillipa Soo",
    "Jonathan Groff",
    "Daveed Diggs",
    5,
    "Lin-Manuel Miranda",
  ],
};

let personWatching: string = "Put your name here!";

let numberOfFriends: number = 12;

let theatreCapacity: number = 1000;

let numberofTicketsSold: string = 980;

let ticketsLeft: number = 0;

function remainingTickets(
  theatreCapacity: string,
  numberofTicketsSold: number
): number {
  ticketsLeft = theatreCapacity - numberofTicketsSold;
  return ticketsLeft;
}
remainingTickets(theatreCapacity, numberofTicketsSold);

function isThereEnoughTickets(
  ticketsLeft: number,
  numberofFriends: number
): booslean {
  if (ticketsLeft > numberofFriends) return true;
  else return false;
}

let enoughTicketsAnswer: string = isThereEnoughTickets(ticketsLeft, numberOfFriends);

function finalReturn(
  enoughTicketsAnswer: boolean,
  musical: musicalObject,
  personWatching: string,
  numberOfFriends: number
): string {
  let musicalCrew: boolean = "";
  if (enoughTicketsAnswer === true) {
    musicalCrew = `${personWatching} is going to watch ${musical.name} with their ${numberOfFriends} friends. They are most excited to see ${musical.mainActors[2]} perform!`;
  } else {
    musicalCrew = `${personWatching} is not going to watch ${musical.name} with their ${numberOfFriends} friends! The theatre is full! Maybe next time...`;
  }
  console.log(musicalCrew);
  return musicalCrew;
}   

finalReturn(enoughTicketsAnswer, musical, personWatching, numberOfFriends);
