"use strict";
window.onload = loginPG2;
let user;
let score;
let returnval;
//gets, increments, and posts score. while  
function incrementclick()
{
  returnval=score;
     
    

     get("http://basic-web.dev.avc.web.usf.edu/"+user).then(function(response){
        score = response.data.score;
        console.log(score);
        score++;
      });
      assignFizzBuzz();
        document.getElementById("fizzbuzzresult").textContent=returnval;
      post("http://basic-web.dev.avc.web.usf.edu/"+user, {score: score});
   

///////NOTICE IF SEESION IS CONNECTED ontimeout() check for error condition



}

//setsup loging when index page loads
function loginPG2()
{
   
 user= sessionStorage.getItem("userNameStorage");
  document.getElementById("userName").textContent = user;
  
 get("http://basic-web.dev.avc.web.usf.edu/"+user).then(function(response){
 

 if(response.status == 200){
    score = response.data.score; 
    
 }
 else{

   post("http://basic-web.dev.avc.web.usf.edu/"+user, { score: 0 }); 
   score=0;
  }
  
 });
 
}
 

//assigns name for fizzbuzz output
function assignFizzBuzz()
{
    

    if (score%3===0 && score%5===0 && score!=0)
    {
      returnval='FizzBuzz';
    }
    else if(score%3==0 && score!=0)
    {
      returnval='Fizz';
    }
    else if (score%5==0 && score!=0)
    {
      returnval='Buzz';
    }
    else
    {
      returnval=score;
    }
    return;

}











 function get(url) {
    return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.onload = function() {
      resolve({ status: http.status, data: JSON.parse(http.response) });
    };
    http.open("GET", url);
    http.send();
    });   
}


    function post(url, data) {
    data = JSON.stringify(data);
    return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.onload = function() {
      resolve({ status: http.status, data: JSON.parse(http.response) });
    };
    http.open("POST", url);
    /*Make sure that the server knows we're sending it json data. */
    http.setRequestHeader("Content-Type", "application/json");
    http.send(data);
    });
    }