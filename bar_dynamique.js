// var dogs = 0;

// function siallume() {
//	dogs = dogs + 1 


//}

function onsurclick( myValue, btId){
	
	if (myValue == "Like" ){

		document.getElementById(btId).class = "Charastesdg";
		document.getElementById("affiche").innerHTML = "COUCOU";
		
	 

	}
	else { 

		document.getElementById(btId).class = "Like";
		document.getElementById("affiche").innerHTML = "";
	}
}


