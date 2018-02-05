const gridHeight = $('#inputHeight'), gridWeight = $('#inputWeight');
const table = $('#pixelCanvas');
const submitButton = $('input[type=submit]');
let colorPicker = $('#colorPicker');
let color = $('#colorPicker').val();
let grid;

$(document).ready(() => {
    submitButton.click((e) => {
        e.preventDefault();
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
    for(let i = 0; i < gridWeight.val(); i++){
        grid = '<tr>';
        for(let j = 0; j < gridHeight.val(); j++){
            grid += '<td></td>';
        }
        grid += '</tr>';
    }

    table.append(grid);
}


