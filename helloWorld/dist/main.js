"use strict";
console.log("Hola TypeScript con Platzi");
//Number
//Explícito
let phone;
phone = 1;
phone = 542345;
// Inferido
let phoneNumber = 543213;
phoneNumber = 1323;
// phoneNumber = true; Error por tipo de dato
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o745;
//Boolean
// Explícito
let isPro;
isPro = true;
// isPro = 1
//Inferido
let isUserPro = false;
//String
let username = "luxaviles";
username = "Pepito";
//Template String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + " Juarez"}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log("userInfo", userInfo);
