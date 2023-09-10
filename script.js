var fonts = [
    'Times New Roman',
    'Helvetica, Arial, sans-serif', 
    'Brush Script MT',
    'Arial, sans-serif', 
    'Courier New, Courier, monospace',
    'Rotis, sans-serif', 
    'Souvenir, sans-serif', 
    'Grunge Fonts', 
    'Avant Garde, sans-serif', 
    'Gill Sans, sans-serif', 
    'Comic Sans MS, cursive'
];

var currentFontIndex = 0;

document.getElementById('myButton').addEventListener('click', function () {
    var textElement = document.getElementById('text');

      textElement.classList.remove('font-class');

      currentFontIndex = (currentFontIndex + 1) % fonts.length;

       textElement.style.fontFamily = fonts[currentFontIndex];

    alert('Font Changed!');
});