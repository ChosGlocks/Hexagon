
window.onload = function() {
    var heroArea = document.querySelector('.hero');    
    var hexaRow = document.getElementById('hexarow').content;
    
    // heroArea.appendChild(newRow);
    
    
    // //var addedRows = heroArea.children;
    // //var addedHexagons = newRow.children;
    // var newRow = hexaRow.cloneNode(true);
    // var test = document.createElement('p');
    // test.textContent = 'test';
    
    

    var addHexagonRow = function (item, count) {        
        var newRow = hexaRow.cloneNode(true);
        var hexElement = document.getElementById('element').content;
        var addHexagon = function () {
            var newHex = hexElement.cloneNode(true);            
            newRow.appendChild(newHex);
        }
        for (var i = 0; i < 21; i++) {
            addHexagon();
        }
        var hexaRowDiv = newRow.querySelector('.hexarow');
        hexaRowDiv.classList.add(item+count);        
        heroArea.appendChild(newRow);
        
    }
    

    for (var i=1; i<10; i++) {
        addHexagonRow('elements-row',i);
    }
}