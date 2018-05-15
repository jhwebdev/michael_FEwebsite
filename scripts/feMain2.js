var myLeif = document.querySelector('#leifS');
	myLeif.onclick = function() 
{
	var mySrc = myLeif.getAttribute('src'); 
	if(mySrc === 'images/leif.png') {
		myLeif.setAttribute('src', 'images/leifS.png');
	} else {
	myLeif.setAttribute('src', 'images/leif.png'); }
}