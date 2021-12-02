// Iteration 1: Names and Input

const hacker1 = 'Carolina'
const hacker2 = 'Jin'

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops 

let spaced = ''

for (let i = 0; i < hacker1.length; i++) {
    spaced += hacker1[i].toUpperCase() + ' '
}
console.log(spaced)


let reversed = ''

for (let i = 0; i < hacker2.length; i++) {
    reversed += hacker2.charAt(hacker2.length-(i+1))
}
console.log(reversed)


if (hacker1.localeCompare(hacker2) < 0) {
    console.log ('The drivers name goes first.')
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log ('Yo, the navigator goes first definitely.')
  } else if (hacker1.localeCompare(hacker2) = 0) {
    console.log(`What?! You both have the same name?`)
  }
