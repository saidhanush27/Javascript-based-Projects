const prompt = require("prompt-sync")()
const name = prompt("what is your name? ")
console.log("hello", name ,"Welcome to our Game! ")

const shouldweplay = prompt('do you want to play ? ')

//*const condition = shouldweplay.toLowerCase() === "yes"
//console.log(condition)

if(shouldweplay.toLowerCase() === "yes") {
    //console.log("Okay We Will Play! ")

    // game logic
     const leftorRight =  prompt("You Enter a Maze, Do you want to turn left or right ? ")
      if (leftorRight === "left"){
        console.log("You go left and see a bridge")
        const cross = prompt("Do you want to cross the bridge? ").toLowerCase()
         if (cross === "yes" ){
            console.log("You crossed but the bridge was weak and you fell. You lost :(")
         }
         else{
            console.log("Good choice... You Win")
         }

      } else {
        console.log("You go right and fall of a cliff :(")
      }



}
else if (shouldweplay.toLowerCase() === "yes") {
    console.log("Okay :( ")
}
 else {
    console.log("Invalid Input !")
 }   


