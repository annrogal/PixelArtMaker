const gridHeight = document.getElementById('inputHeight'), gridWeight = document.getElementById('inputWeight');
const table = document.getElementById('pixelCanvas');
const submitButton = document.getElementById('submitButton');
let colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;
let grid;


    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        table.innerHTML = '';
        makeGrid();
    });
    
    colorPicker.addEventListener('change', function(){
        color = colorPicker.value;
    });

    table.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.nodeName == 'TD'){
            e.target.style.backgroundColor = color;
        }      
    })


function makeGrid() {
    let row;
    for(let i = 0; i < gridHeight.value; i++){
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for(let j = 0; j < gridWeight.value; j++){
            const td = document.createElement('td')
            document.querySelector('tr:last-child').appendChild(td);	
        }
    }
}


