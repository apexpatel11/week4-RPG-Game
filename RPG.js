
window.onload = function () {

	// --declaring variables//

	var Yourcharater;
	var defenderCharacter;
	var gameState ="begin";
	var chosenCharacter;
	var Defender;
	var yourHeathPoints;
	var defenderHeathPoints;
	
    
    // chracters objects//

    var charcters = [
    {charName: "Strak",
      Points@begining: 150,
      strength : 20;
      },

    charName: "Targaryen",
      Points@begining: 150,
      strength : 20;
      }, 

    charName: "Lannister",
      Points@begining: 150,
      strength : 20;
      },
      
    charName: "Baratheon",
      Points@begining: 150,
      strength : 20;
      },    
// select your charcter



var selectHouse = function () {
  if (chosenCharacter === yourCharacter[0]) {
 HouseCharaters.innerHTML = "You have selected your house now!";
       }  else if ( chosenCharacter === HouseCharaters[1]) {       	   
 HouseCharaters.innerHTML =  "These are the huses that you will fight with"; 
   	   }  else if ( chosenCharacter === HouseCharaters[2]) {
 HouseCharaters.innerHTML =  "These are the huses that you will fight with";
      }  else if ( chosenCharacter === HouseCharaters[3]) {
 HouseCharaters.innerHTML =  "These are the huses that you will fight with";
 } 
 };    


// $(document).ready(function() {

// 	$(.box). on("click", function(){
// 		$('.box').animate({
// 			'marginTop' : "+30px" // move down selected box
// 	});
// }