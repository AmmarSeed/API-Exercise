

let main=document.getElementById("main-content")
let input=document.getElementById("search-input")
let button=document.getElementById("enter")

button.addEventListener("click",function () {
let valueofInput=input.value
console.log(valueofInput)
    fetch(`https://newsapi.org/v2/everything?q=${valueofInput}&apiKey=7119599c9b49490fa6ebdbb13c57364d`)
    .then(response => response.json())
    .then(data => {console.log(data)
        let list=data.articles
        let result=list.map(function (listing) {
            return `<p> <span>  ${listing.title} <span> </p>
            <p> ${listing.author} </p>
            <p>${listing.description}</p>`
        });
    main.innerHTML=result
    })
})