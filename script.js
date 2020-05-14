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