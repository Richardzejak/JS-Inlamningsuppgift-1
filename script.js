let elementCount =0;
let elementChange =0;


document.getElementById("blogamount").addEventListener('change', setEqual);
function setEqual(){
  if (blogamount.value>20)
  {
  blogamount.value="20";
  alert("Cant Set more than 20 Blog Inputs!");
  }
  if (blogamount.value < 0)
  {
  blogamount.value="0";
  alert("Cant set negative number")
  }
  elementChange=blogamount.value-elementCount; // ger skillnadens värde till elementChange
  elementCount=blogamount.value; // sätter elementcount till blogamounts värde
  while (elementChange>0)
  {
    createBlogInput(); // kallar på att skapa objekt funktionerna
    elementChange--;
  }
  while(elementChange<0)
  {
    removeBlogInput();
    elementChange++;
  }
}

function createBlogInput(){
  let blogInput = document.createElement("input");
  blogInput.type="text";
  blogInput.className = "blogInputClass";
  blogInput.id = "box";
  var parent = document.getElementById("bloginputcontainer");
  parent.appendChild(blogInput);
}

function removeBlogInput(){
var lastCreatedElement = document.getElementById("box");
lastCreatedElement.remove();
}

/* function addElement () {
   const newDiv = document.createElement("div");
   const newContent = document.createTextNode("Hey hey");

   newDiv.appendChild(newContent);

   const currentDiv = document.getElementById("div1");
   document.body.insertBefore(newDiv, currentDiv);

   elementCount++;
 }*/