/* postits.js
 *
 */

window.onload = init;
var count = 0;

function init() {
	var button = document.getElementById("add_button");
	button.onclick = createSticky;
	
	var buttonClear = document.getElementById("eliminar_button");
	buttonClear.onclick = eliminarPostIt;
	// EJERCICIO A
	// cargar las notas postit de localStorage  
	// cada nota se guarda como un par así: postit_X = texto_de_la_nota
	// donde X es el número de la nota
	// por cada una de ellas, llamar al método
	// addStickyToDOM(texto_de_la_nota);
	
	count = localStorage.getItem("postit_count");
	for (var i=1; i <= count; i++) { 
		var postitActual = localStorage.getItem("postit_" + i); 
		addStickyToDOM(postitActual);
	}
	localStorageSpace();
}

function createSticky() {
	var value = document.getElementById("note_text").value;
	
	// EJERCICIO B
        // crear la nota con nombre postit_X, donde X es un número entero
	// (postit_1, postit_2, ...)  y guardarla en el localStorage
	count ++;
	localStorage.setItem("postit_count", count);
	localStorage.setItem("postit_"+count, value);
	addStickyToDOM(value);
	localStorageSpace()
}


function addStickyToDOM(value) {
	var stickies = document.getElementById("stickies");
	var postit = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class", "postit");
	span.innerHTML = value;
	postit.appendChild(span);
	stickies.appendChild(postit);
}
function eliminarPostIt (){
	count = localStorage.getItem("postit_count");
	for (var i=1; i <= count; i++) { 
		localStorage.removeItem("postit_" + i); 
		
	}
	localStorage.removeItem("postit_count");
	location.reload();
	
}
function localStorageSpace(){
        var data = '';
		for(var key in window.localStorage){
			if(window.localStorage.hasOwnProperty(key)){
				data += window.localStorage[key];
			}

		}
		var total = data ? '\n' + 'Espacio utilizado: ' + ((data.length * 16)/(8 * 1024)).toFixed(2) + ' KB' : 'Vacio (0 KB)';
		var paragraph = document.getElementById("consumo");
		paragraph.textContent=total
    };