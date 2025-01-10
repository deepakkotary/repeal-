console.log('Hello from version 2');
// redirect to in if localstorage dont have any user id 
var popUps = document.getElementsByClassName('popUps')[0];
window.onload = function(){
 popUps.style.display="none";
console.log("js is running");
};
var userId = localStorage.getItem('userId');
if (!userId){
    window.location.href = 'http://127.0.0.1:5500/versions/verson%202/in/index.html';
   
}
// fatch firebase real time data base 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBUcXLmpfzTQFe4wu3v3c4iobRuLlIN3lw",
   authDomain: "fast-fce0e.firebaseapp.com",
   databaseURL: "https://fast-fce0e-default-rtdb.firebaseio.com",
   projectId: "fast-fce0e",
   storageBucket: "fast-fce0e.firebasestorage.app",
   messagingSenderId: "356924324638",
   appId: "1:356924324638:web:34b3ef18c6b0925b9e670f"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
//////////////////////////
import { getDatabase, update, get, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
const db = getDatabase(app);
console.log("successfully attached to database");
// lets create a search bar
// lets get data of selected option

    
// lets get data of input box

// lets search our input data in firebase
document.getElementById("sear").addEventListener("click",event=>{
// start of search event
event.preventDefault();
var select=document.getElementsByTagName('select')[0];
var input=document.getElementById('search');
get(ref(db,'users/')).then(snapshot=>{
    // start of then
   //onsole.log(snapshot.val());
 for(const keys in snapshot.val()){
    // start of for in loop
//console.log(keys);
var profiles=snapshot.val()[keys];
//console.log(profiles);
// lets filter our search results via input option
var yourOption=profiles[select.value];
console.log(yourOption);
var results= document.getElementById("results");
if(yourOption===input.value){
    console.log('found');
 
console.log(keys);
return results.innerText=keys;
}else{
    console.log("not found");
    results.innerText='not found';
};

// end of for in loop
 }                              
// end of then
}).catch(error=>{
    console.log(error);
})

// end of search event
})

// making a event for logout
document.getElementById("logout").addEventListener('click',event=>{
  localStorage.removeItem('userId');
  location.reload();  
});
// making a event for hiding pop up

document.getElementById("up").addEventListener('click',event=>{
popUps.style.display="none";
document.getElementsByClassName("search").style.display='none';
document.getElementsByClassName("menue").style.display='none';
});

document.getElementById('seur').addEventListener('click',event=>{
  popUps.style.display="flex";
  document.getElementsByClassName("search")[0].style.display='flex';
  document.getElementsByClassName("exist")[0].style.display='flex';
  
});
document.getElementById('men').addEventListener('click',event=>{
  popUps.style.display="flex";
  document.getElementsByClassName("menue")[0].style.display='flex';
  document.getElementsByClassName("exist")[0].style.display='flex';
});
