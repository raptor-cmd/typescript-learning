//Tipo explícito
let idUser: any;
idUser = 1;
idUser = "1";
console.log("idUser", idUser);

//Tipo inferido
let otherId;
otherId = 1;
otherId = "1";
console.log("otherId", otherId);

let surprise: any = "hello typescript";
//
const res = surprise.substring(6);

console.log("res", res);
