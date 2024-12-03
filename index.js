var overlay=document.querySelector(".popupOverlay")
var popup=document.querySelector(".popupBox")
var addButton=document.getElementById("addPopup")

addButton.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

var cancelEvent=document.getElementById("cancelPopup")
cancelEvent.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})

var container=document.querySelector(".container")
var addBook=document.getElementById("addBook")
var bookTitleInput=document.getElementById("bookTitleInput")
var bookAuthorInput=document.getElementById("bookAuthorInput")
var BookDescriptionInput=document.getElementById("BookDescriptionInput")

addBook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookContainer")
    div.innerHTML=`<h2>${bookTitleInput.value}</h2>
            <h5>${bookAuthorInput.value}</h5>
            <p>${BookDescriptionInput.value}</p>
            <button onclick="deleteclick(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})

function deleteclick(event){
    event.target.parentElement.remove()
    
}