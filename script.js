window.onload = loginPG2;
let user;
let score;
function incrementclick()
{
         
     let returnval=score;
    

     get("http://basic-web.dev.avc.web.usf.edu/"+user).then(function(response){
        score = response.data.score;
        console.log(score);
        score++;
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
          returnval=score+' ';
        }
        
          fizzbuzzresult.innerHTML=returnval;
      post("http://basic-web.dev.avc.web.usf.edu/"+user, {score: score}).then(function(response){
        switch(response.status){
          case 200:
            //User was updated successfully.
            //response.data will be the same as returned by get(), and should contain the updated data.
             score = response.data.score;
            break;
          case 201:
            //A new user was successfully created. Otherwise same as status 200.
             score = response.data.score;
            break;
          case 400:
            //Bad request. Most likely your data that you sent (in this case dataToSend) was formatted incorrectly, or you supplied a negative score value.
            //response.data will be: { Error: "error message" }
            console.error(response.data);
            break;
          case 500:
            //Something went wrong on the server, such as the database got deleted somehow. This should never happen.
            //response.data will be the same as status 400.
            console.error(response.data);
            break;
        }
      });
   //return returnval;
});


}


function loginPG2()
{
   
 user= sessionStorage.getItem("userNameStorage");
  document.getElementById("userName").innerHTML = user;
  
 get("http://basic-web.dev.avc.web.usf.edu/"+user).then(function(response){
 

 if(response.status == 200){
    username = response.data.id; 
    score = response.data.score; 
    
 }
 else{

   post("http://basic-web.dev.avc.web.usf.edu/"+user, { score: 0 }); 
   get("http://basic-web.dev.avc.web.usf.edu/"+user).then(function(response){
     score=response.data.score; });
   /* create a new user. */
 }
  
 });
 fizzbuzzresult.innerHTML=score;
}
 


function play()
{



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