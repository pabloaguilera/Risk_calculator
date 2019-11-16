var AV = document.getElementById('AV');
var EF = document.getElementById('EF');
var ARO = document.getElementById('ARO');
var ALE = document.getElementById('ALE');
//
//AV.value =  "20500";
//ALE.innerText = "Prueba";
var form = document.getElementById('ALEcalculatorForm');

form.addEventListener('submit', function(event) {

	if (!AV.value || !EF.value || !ARO.value ) {
		alert("Please enter values in the fields");
	} else {
		var x = parseFloat(AV.value);
		var y = parseFloat(EF.value)/100;
		var z = parseFloat(ARO.value);
		
		var ALEresult = x * y * z;
		
//		alert("AV is " + x + " EF is " + y + " ARO is " + z + ". So, the ALE is " + ALEresult);
		
		ALE.innerText = "The ALE is " + ALEresult;
		
		event.preventDefault();	
	}
});