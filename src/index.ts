const cards = document.createElement("card-container")
const btn = document.getElementById("btn")
const inputName = document.getElementById("input-name") as HTMLInputElement

function createCard(text:String){

}

if(btn !== null && inputName !== null){
    btn.addEventListener("click", () => createCard(inputName.value))    
}

