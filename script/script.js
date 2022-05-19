
window.onload = function() {
    var heroArea = document.querySelector('.hero');    
    var hexaRow = document.getElementById('hexarow').content;
    var hexElement = hexaRow.getElementById('element').content;
    var newRow = hexaRow.cloneNode(true);
    //var addedRows = heroArea.children;
    //var addedHexagons = newRow.children;
    var test = document.createElement('p');
    test.textContent = 'test';

    var addRow = function() {
        heroArea.appendChild(newRow);             
    }

    var addHexagon = function () {
        var newHex = hexElement.cloneNode(true);
        newRow.appendChild(newHex);       
    }
      
    addHexagon();
    addHexagon();    
    addHexagon();        
    


}