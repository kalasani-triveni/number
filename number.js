var randomnumber =Math.floor(Math.random()*100)+1;
var attempts= 0;
document.getElementById('btn').addEventListener('click',function(){
    var guess = parseInt(document.getElementById('guessinput').value);
    attempts++;
    if(guess===randomnumber)
    {
      displaymessage("congratulations!you guessed number in"+attempts+"attempts");
      document.getElementById('btn').disabled=true;
    }
    else if(guess<randomnumber)
    {
        displaymessage("Too low!try higher number")
    }
    else 
    {
     displaymessage("Too high!try lower number")
    }
});
function displaymessage(Message)
{
    document.getElementById('msg').textContent=Message;
}