let string = ""

// select all the tags having class as ".b", im my case all buttons are of same class.....
let buttons = document.querySelectorAll(".b")

// Array.from() creates the array of each element present in the buttons currently.......
// forEach will iterate through each button....
Array.from(buttons).forEach((button) => {
    // here button shows the the current index button in the buttons (same as i in for loop)...
    // if current button is clicked then control will go in...., 
    button.addEventListener("click", (e) =>{
        // if current event e or say current button generate is clicked then a random number between 
        // 1 to 100 get generated.....
        if (e.target.innerHTML == "generate"){
            string = Math.floor((Math.random()*100)+1)
            // this syntax is used to display whatever we want to display on label....
            document.getElementById("generate").innerHTML = "Random Number Generated"
        }
        else if (e.target.innerHTML == "guess"){
            // when guess button is clicked and number is not guessed then give some aert to user......
            if (string.length == 0){
                document.getElementById("output").innerHTML = "First generate a random number!!!"
            }   
            else {
                let inputText = document.getElementById("input").value
                if (Number.parseInt(inputText) == Number.parseInt(string)){
                    // this syntax is used to display whatever we want to display on label....
                    document.getElementById("output").innerHTML = "Hurray!!! Correct Guess!!!!"
                    document.getElementById("generate").innerHTML = "Generated a Random Number"
                    // this syntax is used to display a text whatever we want to display on input....
                    document.getElementById("input").value = ""                
                }
                else if (Number.parseInt(inputText) < Number.parseInt(string)){
                // this syntax is used to display whatever we want to display on label....
                    document.getElementById("output").innerHTML = "Sorry, guessed number is smaller!!!"
                }
                else if (Number.parseInt(inputText) > Number.parseInt(string)){
                    // this syntax is used to display whatever we want to display on label....
                    document.getElementById("output").innerHTML = "Sorry, guessed number is greater!!!"
                }
            }
        }
    })
})