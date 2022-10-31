import { send } from "vite";

const arr = ["a", "b", "c", "d"];
let sentence = "";
for(let i = 0; i < arr.length; i++) {
  sentence += arr[i];
}
console.log(sentence)