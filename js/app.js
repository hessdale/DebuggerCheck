let username = "admin";
let user_age = 26;
let is_member = true;
let user_greeting = `Hello ${username}`;
let max_volume = 100;
let current_volume = 50;
let user_names = [`user1`, `user2`, `user3`, `user4`, `user5`];
let user_ages = ['10', '20', '30', '40', '50'];
let first_username = user_names[0];
let last_user = user_names[4];
let middle_user_age = user_ages[2];

if (username === "admin" || (user_age >= 30 && is_member === true)) {
    console.log(`Special ${user_greeting}`);
} else {
    console.log(`${user_greeting}`);
}
console.log(`You are ${user_age}`);

console.log(max_volume / current_volume);
console.log(max_volume / current_volume * 100);

