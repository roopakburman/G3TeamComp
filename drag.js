function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    //ev.dataTransfer.dropEffect='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);
    return true;
}

function dragEnter(ev) {
    var idelt = ev.dataTransfer.getData("Text");
    return true;
}

/* function dragOver(ev) {
    var idelt = ev.dataTransfer.getData("Text");
    var id = ev.target.getAttribute('id');
    if( (id =='boxB' || id =='boxA') && (idelt == 'drag' || idelt=='drag2' || idelt=='drag7' || idelt=='drag5'))
        return false;
    else if( id =='boxC' && (idelt == 'drag3' || idelt == 'drag4' || idelt == 'drag6'))
        return false;
    else
        return true;
} */
window.str = "";
window.score=0;
function dragOver(ev) {
    var idelt = ev.dataTransfer.getData("Text");
    var id = ev.target.getAttribute('id');
    if( (id =='boxB' || id =='boxA') && (idelt == 'drag' || idelt=='drag2' || idelt=='drag3' || idelt=='drag4' || idelt=='drag5' || idelt=='drag6' || idelt=='drag7' || idelt=='drag8'))

        return false;
    else if( id =='boxC' && (id=='box1' || idelt == 'drag' || idelt=='drag2' || idelt=='drag3' || idelt=='drag4' || idelt=='drag5' || idelt=='drag6' || idelt=='drag7' || idelt=='drag8'))
        return false;
    else 
		return true;
}

function dragEnd(ev) {

    ev.dataTransfer.clearData("Text");
    return true
}


function dragDrop(ev) {
    var idelt = ev.dataTransfer.getData("Text");

	ev.target.appendChild(document.getElementById(idelt));
    ev.stopPropagation();

	str = str.concat(idelt.substring(1,4));
	if(score<100){
		if(idelt == 'drag8'){
			score = score + 15;
		}
		else if(idelt == 'drag7'){
			score = score + 5;
		}
		else if(idelt == 'drag6'){
			score = score + 18;
		}
		else if(idelt == 'drag5'){
			score = score + 22;
		}
		else if(idelt == 'drag4'){
			score = score + 12;
		}
		else if(idelt == 'drag3'){
			score = score + 13;
		}
		else if(idelt == 'drag2'){
			score = score + 5;
		}
		else if(idelt == 'drag'){
			score = score + 10;
		}
		document.getElementById("myTeam").innerHTML = score + "%";

	}
	if (str == 'ragragragragragragragrag'){
		
		ev.target.style.backgroundColor="#CCCC00";
		
	}
	        
	return false; // return false so the event will not be propagated to the browser
}