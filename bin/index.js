#!/usr/bin/env node

const stolpejaktGreeting = 'Stolpejakt dag: ';
//dag 1 = 31. mars
let dateStart = new Date('2023-03-31');
let dateNow = new Date();
let difference = dateNow.getTime() - dateStart.getTime();
//result in ms
let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
console.log(stolpejaktGreeting + totalDays)

