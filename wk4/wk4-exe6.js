   function updateH1() {
    var h1_element = document.getElementById('pageheading');
    h1_element.firstChild.nodeValue = 'New heading';
   
   }
   function myLoadFunction() {
    var h1_element = document.getElementById('pageheading');
    h1_element.addEventListener('click', updateH1);
    var p_element = document.getElementById('paragraph');
    p_element.addEventListener('click', updateParagraph);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
