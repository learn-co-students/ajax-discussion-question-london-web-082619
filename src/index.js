const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

const name = document.querySelector("#fullname");
const email = document.querySelector("#email");
const street = document.querySelector("#street");
const city = document.querySelector("#city");
const phone = document.querySelector("#phone");
const dOb = document.querySelector("#date_of_birth");
const state = document.querySelector("#state");
const cell = document.querySelector("#cell");
const postCode = document.querySelector("#postcode");
const img = document.querySelector('img');


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
function loadRandMuser(){
  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => renderUser(json))
}

const btn = document.querySelector('.btn-primary')
btn.addEventListener('click', e=>{
  loadRandMuser()
  
})



function renderUser(json){
  personInfo = json.results[0]
  name.innerHTML = `${personInfo.name.title} ${personInfo.name.first} ${personInfo.name.last}`
  email.innerHTML = personInfo.email
  street.innerHTML = personInfo.location.street.name
  city.innerHTML = personInfo.location.city
  phone.innerHTML = personInfo.phone
  dOb.innerHTML = personInfo.dob.date.split("-")[0]
  state.innerHTML = personInfo.location.state
  cell.innerHTML = personInfo.cell
  postCode.innerHTML = personInfo.location.postcode
  img.src = personInfo.picture.medium
  
}
function addElement(el){
  let element = document.createElement(`${el}`);
  document.appendChild(element);
}
