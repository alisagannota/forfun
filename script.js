document.getElementById('button').onclick = duplicate;


var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
    var clone = original.cloneNode(true); 
    clone.id = "duplicetor" + ++i;
    original.parentNode.appendChild(clone);
}

let container = document.querySelector ('#container');


for (let i= 0; i < 20; i++) {
    let circle = document.createElement ('div');
    circle.classList.add ('circle');
    circle.style.left = (90 * Math.random ()) + '%';
    circle.style.top = (90 * Math.random ()) + '%';
    container.appendChild (circle);
}

container.addEventListener('click', function (event) {
    if (event.target.classList.contains ('circle')) {
        event.target.remove();
    }
})
