window.addEventListener('DOMContentLoaded',() => {
        const cards = document.createElement("card-container") as HTMLElement
        const btn = document.getElementById("btn") as HTMLInputElement
        const inputName = document.getElementById("input-name") as HTMLInputElement
        const myAlert = document.getElementById("myAlert") as HTMLElement

        btn.addEventListener('click', async () => {

            const myPromise = new Promise((resolve, reject) =>{
                setTimeout(() => {
                    if (inputName && inputName.value.trim() !== "") {
                      resolve(inputName.value);
                    } else {
                      reject("Hubo un error");
                    }
                }, 2000);
            })

            myPromise.then(() => {
                    const ionCard = document.createElement("ion-card")
                    const ionCardContent = document.createElement("ion-card-content")

                    ionCardContent.textContent = inputName.value;
    
                    ionCard.appendChild(ionCardContent)
                    cards.appendChild(ionCard)
                
                    inputName.value = ''
              })
              .catch(async error => {
                if(myAlert){
                    await (myAlert as any).present()
                }
              });    
        })
    }

)



