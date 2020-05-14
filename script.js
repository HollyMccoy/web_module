function incrementclick()
{
                
     let returnval="";

     for (let i=0; i<100;i++)
    {
         if (i%3==0 && i%5==0)
        {
          returnValue='FizzBuzz';
        }
        else if(1%3==0)
        {
             returnValue='Fizz';
        }
        else if (i%5==0)
        {
              returnValue='Buzz';
        }
        else
        {
            returnValue+=i+' ';
        }

     }
    return returnValue;
}