let username = "admin";
let user_age = 26;
let is_member = true;
let user_greeting = `Hello ${username}`;
let max_volume = 100;
let current_volume = 50;

if (username === "admin" || (user_age >= 30 && is_member === true)) {
    console.log(`Special ${user_greeting}`)
} else {
    console.log(`${user_greeting}`)
}
console.log(`You are ${user_age}`)
console.log(max_volume / current_volume)
console.log(max_volume / current_volume * 100)