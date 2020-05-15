let i=1;

function incrementclick()
{
         
     let returnval="";
    
   
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
     
     document.getElementById("fizzbuzzresult").innerHTML=returnval;
 
    //return returnval;
}

function loginPG2()
{
    
  let user= sessionstorage.getItem("");


  get("http://basic-web.dev.avc.web.usf.edu/"+userName).then(function(response){
  

  if(response.status == 200){
    const username = response.data.id; 
    const score = response.data.score; 
  }
  else{
 
    post("http://basic-web.dev.avc.web.usf.edu/"+userName, { score: 0 }); 
    /* create a new user. */
  }
  });
}
 