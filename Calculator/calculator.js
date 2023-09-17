let string = ""

// selects all those have class .b (in my case buttons are in class .b)
let buttons = document.querySelectorAll('.b')

// Array.from(buttons) will create array.....
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '='){
            try{
                if (eval(string) != undefined){
                    string = eval(string)
                }
                string = eval(string)
                document.querySelector('input').value = string
            }
            catch{
                document.querySelector('input').value = "Invalid Input!!!"
            }
        }
        else if (e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = "0"
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.slice(0, string.length-1)
            if (string.length>0)
                document.querySelector('input').value = string
            else
                document.querySelector('input').value = "0"
        }
        else if (e.target.innerHTML == 'OFF'){
            string = ""
            document.querySelector('input').value = ""
        }        
        else{
            if (string == '0' || string == ''){
                string = ""
                document.querySelector('input').value = '0'
            }
            // console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})