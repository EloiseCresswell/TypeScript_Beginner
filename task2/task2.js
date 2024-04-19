"use strict";
//Task 2 - fun fun functions! 
const sentenceAboutSusan = (person, age, address, houseName, petsNames) => {
    let personSentence = `${person} is ${age} years old and lives at ${address.houseName} and her favourite per is ${petsNames[1]}`;
    return personSentence;
};
const ageOfPerson = (age) => {
    let ageInTenYears = age + 10;
    return ageInTenYears;
};
