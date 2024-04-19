//The answer to task 3... try not to peek!

type musicalObject = {
  name: string;
  firstPerformed: number;
  stillShown: boolean;
  mainActors: string[];
};

let musical: musicalObject = {
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

let personWatching: string = "Put your name here!";

let numberOfFriends: number = 12;

let theatreCapacity: number = 1000;

let numberofTicketsSold: number = 980;

let ticketsLeft: number = 0;

function remainingTickets(
  theatreCapacity: number,
  numberofTicketsSold: number
): number {
  ticketsLeft = theatreCapacity - numberofTicketsSold;
  return ticketsLeft;
}
remainingTickets(theatreCapacity, numberofTicketsSold);

function isThereEnoughTickets(
  ticketsLeft: number,
  numberofFriends: number
): boolean {
  if (ticketsLeft > numberofFriends) return true;
  else return false;
}

let enoughTicketsAnswer = isThereEnoughTickets(ticketsLeft, numberOfFriends);

function finalReturn(
  enoughTicketsAnswer: boolean,
  musical: musicalObject,
  personWatching: string,
  numberOfFriends: number
): string {
  let musicalCrew: string = "";
  if (enoughTicketsAnswer === true) {
    musicalCrew = `${personWatching} is going to watch ${musical.name} with their ${numberOfFriends} friends. They are most excited to see ${musical.mainActors[2]} perform!`;
  } else {
    musicalCrew = `${personWatching} is not going to watch ${musical.name} with their ${numberOfFriends} friends! The theatre is full! Maybe next time...`;
  }
  console.log(musicalCrew);
  return musicalCrew;
}

finalReturn(enoughTicketsAnswer, musical, personWatching, numberOfFriends);
