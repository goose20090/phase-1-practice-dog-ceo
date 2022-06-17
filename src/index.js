const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(response=> response.json())
    .then(response=> {
        console.log("response", response.message)
        const dogImageContainer = document.getElementById("dog-image-container")
        console.log(dogImageContainer)
        response.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            dogImageContainer.append(img)
        })
    })

}


let breeds = []

function getBreeds(){
    const breedUrl= "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(response=> response.json())
    .then(response=>{
        breeds = Object.keys(response.message)
        addBreedNamesToDom(breeds)
        })

    }

function addBreedNamesToDom(breeds){
    const listOfBreeds = document.querySelector("#dog-breeds")
    breeds.map(breed => {
        const li = document.createElement("li")
        li.textContent = breed
        listOfBreeds.append(li)
    })
}

document.addEventListener("click", event =>{
    if(event.target.matches("li")){
        event.target.style.color = "yellow"
    }
})

document.addEventListener("change", event => {
    if (event.target.matches("#breed-dropdown")){
        const listOfBreeds= document.querySelector("#dog-breeds")
        listOfBreeds.innerHTML = ""
        const filteredBreeds = breeds.filter(breed=>breed[0] === event.target.value)
        addBreedNamesToDom(filteredBreeds)
}
})

getImages()
getBreeds()