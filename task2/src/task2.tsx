//Task 2 - fun fun functions! 
//This task is similar to the previous one, and we need the types added to the function examples below
//Similarly, run npm run dev when you've finished acing this task 🙌

let personName: string = "Susan";

let personAge: number = 2;

interface addresses {
    houseName: string,
    houseStreet: string, 
    city: string,
}
let personAddress: addresses = {
  houseName: "Quality House",
  houseStreet: "Cadburys",
  city: "Bourneville",
};

let petNames: Array<string> = ["stuart", "bob", "fred"];

let isPersonAResident: boolean = true;

const sentenceAboutSusan = (personName, personAge, personAddress.houseName, petNames) => {
    let personSentence = `${personName} is ${personAge} years old and lives at ${personAddress.houseName} and her favourite per is ${petNames[1]}`;
    return personSentence;
  };
  
  const ageOfPerson = (personAge) => {
    let ageInTenYears = personAge + 10;
    return ageInTenYears;
  };