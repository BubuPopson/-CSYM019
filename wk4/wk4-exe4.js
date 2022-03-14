function myLoadFunction() {
    var h1_element = document.getElementById('pageheading');
    h1_element.firstChild.nodeValue = 'New Heading';
    var p_element = document.getElementById('paragraph');
    p_element.firstChild.nodeValue = 'New paragraph text';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   