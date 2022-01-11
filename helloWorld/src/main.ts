console.log("Hola TypeScript con Platzi");

//Number
//Explícito
let phone: number;
phone = 1;
phone = 542345;

// Inferido
let phoneNumber = 543213;
phoneNumber = 1323;
// phoneNumber = true; Error por tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o745;

//Boolean
// Explícito
let isPro: boolean;
isPro = true;
// isPro = 1

//Inferido
let isUserPro = false;

//String
let username: string = "luxaviles";
username = "Pepito";

//Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + " Juarez"}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log("userInfo", userInfo);
