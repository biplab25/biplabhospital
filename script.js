var container=document.getElementById("patientid");
var logindiv=document.getElementById("logindiv");

container.classList.add("code");
var objuser=[

  {
    username:"bipin",
    password:"bhatta"
  },

  {
    username:"kriti",
    password:"ghosh"
  },

  {
    username:"amrito",
    password:983
  } 

]

function getuser(){
  var username= document.getElementById("username").value
  var password= document.getElementById("password").value
  for(var i=0;i<objuser.length;i++){
    if(username==objuser[i].username && password==objuser[i].password){
        console.log("Logged in");
        container.classList.remove("code");
        logindiv.classList.add("code");
        return
    }
  }
  //console.log("Incorrect username or password");
  alert("Incorrect username or password");
}



//Select 'ul' element
var list = document.querySelector('ul');
//Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  
  //Name Input
  var inputValue1 = document.getElementById("myInput1").value;
  var span3 = document.createElement("div");
  var t1 = document.createTextNode(inputValue1);
  span3.classList.add("name");
  span3.appendChild(t1);
  li.appendChild(span3);
  if (inputValue1 === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput1").value = "";

  //phone no Input
  var inputValue2 = document.getElementById("myInput2").value;
  var span2 = document.createElement("div");
  var t2 = document.createTextNode(inputValue2);
  span2.classList.add("phone");
  span2.appendChild(t2);
  li.appendChild(span2);
  if (inputValue2 === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput2").value = "";
  
 // Delete button 
  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("Delete");
  span.classList.add("close");
  span.appendChild(txt);
  li.appendChild(span);
  store();
}
//Delete onclick
myUL.addEventListener('click',function(e){
   e.target.parentNode.remove();
  store();
});

//Storage Function
function store() {
  window.localStorage.myitems = list.innerHTML;
}

//Get Storage Values
function getValues() {
  var storedValues = window.localStorage.myitems;
  if(!storedValues) {
    list.innerHTML = ' ';
  }
  else {
    list.innerHTML = storedValues;
    
  }
}
//calling getvalues function
getValues();

