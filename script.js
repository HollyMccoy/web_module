let i=1;
function incrementclick()
{
         
     let returnval="";
    
   //  for (let i=0; i<100;i++)
    //{
         if (i%3===0 && i%5===0)
        {
          returnval='FizzBuzz';
        }
        else if(1%3==0)
        {
          returnval='Fizz';
        }
        else if (i%5==0)
        {
          returnval='Buzz';
        }
        else
        {
          returnval+=i+' ';
        }
        i++;
     //}
     document.getElementById("fizzbuzzresult").innerHTML=returnval;
 
    //return returnval;
}





 /* Request json data from the back-end API. This function is used to read data from the API. To update data in the API, use post().
 */
get("http://basic-web.dev.avc.web.usf.edu/myUserName").then(function(response){
  //Put all code that relies on the data from this request in here.

  if(response.status == 200){
    const username = response.data.id; /*The username that was requested. In this case it is "myUserName".*/
    const score = response.data.score; /*The user's current score. */
  }
  else{
    //User "myUserName" not found.
    //response.data is null
    post("http://basic-web.dev.avc.web.usf.edu/myUserName", { score: 0 }); 
    /* create a new user. */
  }
});

function get(url) {
return new Promise((resolve, reject) => {
  const http = new XMLHttpRequest();
  http.onload = function() {
    resolve({ status: http.status, data: JSON.parse(http.response) });
  };
  http.open("GET", url);
  http.send();
});
}


/* Send data to the back-end API. 
@param {string} url - The url of the API plus the API path.
@param {object} data - The data to send.
@returns {Promise<Response>} - A Promise of the Response.
@example */
const dataToSend = { score: 5 };
post("http://basic-web.dev.avc.web.usf.edu/myUserName", dataToSend).then(function(response){
  switch(response.status){
    case 200:
      /*User was updated successfully.
      response.data will be the same as returned by get(), and should contain the updated data. */
      const score = response.data.score;
      window.location.href = "index.html";
      break;
    case 201:
      /* A new user was successfully created. Otherwise same as status 200. */
      const score = response.data.score;
      break;
    case 400:
      /*Bad request. Most likely your data that you sent (in this case dataToSend) was formatted incorrectly, or you supplied a negative score value.
      //response.data will be: { Error: "error message" } */
      console.error(response.data);
      break;
    case 500:
      /*Something went wrong on the server, such as the database got deleted somehow. This should never happen.
      //response.data will be the same as status 400. */
      console.error(response.data);
      break;
  }

});

function post(url, data) {
data = JSON.stringify(data);
return new Promise((resolve, reject) => {
  const http = new XMLHttpRequest();
  http.onload = function() {
    resolve({ status: http.status, data: JSON.parse(http.response) });
  };
  http.open("POST", url);
  /*Make sure that the server knows we're sending it json data. */
  http.setRequestHeader("Content-Type", "application/json");
  http.send(data);
});
}


