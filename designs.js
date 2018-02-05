const gridHeight = $('#inputHeight'), gridWeight = $('#inputWeight');
const table = $('#pixelCanvas');
const submitButton = $('input[type=submit]');
let colorPicker = $('#colorPicker');
let color = $('#colorPicker').val();
let grid;

$(document).ready(() => {
    submitButton.click((e) => {
        e.preventDefault();
        table.empty();
        makeGrid();
    });
    
    colorPicker.change(() => {
        color = colorPicker.val();
    });
    
    table.on('click', 'td', function(e) {
        e.preventDefault();
        $(this).css('background-color', color);
    });
});

function makeGrid() {
    let row;
    for(let i = 0; i < gridHeight.val(); i++){
        table.append('<tr></tr>');
        for(let j = 0; j < gridWeight.val(); j++){
            $("tr:last").append("<td></td>");	
        }
    }
}


