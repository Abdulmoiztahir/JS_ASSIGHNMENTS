var answers = document.getElementById("answers");

document.getElementById('bold').addEventListener('click', () => {
    var inputText = document.getElementById('input');
    inputText.style.fontWeight = (inputText.style.fontWeight === 'bold'? 'normal' : 'bold');
  });
  
  document.getElementById('italic').addEventListener('click', () => {
    var inputText = document.getElementById('input');
    inputText.style.fontStyle = (inputText.style.fontStyle === 'italic'? 'normal' : 'italic');
  });
  
  document.getElementById('underline').addEventListener('click', () => {
    var inputText = document.getElementById('input');
    inputText.style.textDecoration = (inputText.style.textDecoration === 'underline'? 'none' : 'underline');
  });
  
  document.getElementById('fontsize').addEventListener('click', () => {
    var inputText = document.getElementById('input');
    var fontSize = document.getElementById('sizes').value;
    inputText.style.fontSize = fontSize;
  });
  
  document.getElementById('fontfamily').addEventListener('click', () => {
    var inputText = document.getElementById('input');
    var fontFamily = document.getElementById('fontfamilies').value;
    inputText.style.fontFamily = fontFamily;
  });
  
  document.getElementById('textcolor').addEventListener('click', () => {
    var inputText = document.getElementById('input');
    var colorPicker = document.getElementById('textcolor').children[0];
    inputText.style.color = colorPicker.value;
  });

  answers.innerText = inputText ;