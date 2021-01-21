let elementCount;

document.getElementById("blogamount").addEventListener('change', setEqual);

function setEqual(){
  elementCount=blogamount.value;
  alert(elementCount);
}


/* function addElement () {
   const newDiv = document.createElement("div");
   const newContent = document.createTextNode("Hey hey");

   newDiv.appendChild(newContent);

   const currentDiv = document.getElementById("div1");
   document.body.insertBefore(newDiv, currentDiv);

   elementCount++; */
 }