document.getElementById('button').onclick = duplicate;


var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
    var clone = original.cloneNode(true); 
    clone.id = "duplicetor" + ++i;
    original.parentNode.appendChild(clone);
}


