var myMarth = document.querySelector('#marthS');
	myMarth.onclick = function() 
{
	var mySrc = myMarth.getAttribute('src'); 
	if(mySrc === 'images/marth.png') {
		myMarth.setAttribute('src', 'images/marthS.png');
	} else {
	myMarth.setAttribute('src', 'images/marth.png'); }
}


var myAlm = document.querySelector('#almS');
	myAlm.onclick = function() 
{
	var mySrc = myAlm.getAttribute('src'); 
	if(mySrc === 'images/alm.png') {
		myAlm.setAttribute('src', 'images/almS.png');
	} else {
	myAlm.setAttribute('src', 'images/alm.png'); }
}

var mySeliph = document.querySelector('#seliphS');
	mySeliph.onclick = function() 
{
	var mySrc = mySeliph.getAttribute('src'); 
	if(mySrc === 'images/seliph.png') {
		mySeliph.setAttribute('src', 'images/seliphS.png');
	} else {
	mySeliph.setAttribute('src', 'images/seliph.png'); }
}