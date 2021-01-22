let elementCount =0;
let elementChange =0;
let elementCreateId =1;

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

  elementCreateId++;

 let div = document.createElement("div");
  div.id = "div"+elementCreateId;
  var parent = document.getElementById("box-container-id");
  parent.appendChild(div);

  let titleInput = document.createElement("Input");
  titleInput.value = "Title"+(elementCreateId-1);
  titleInput.type="text";
  titleInput.className = "titleInputClass";
  titleInput.id = "titleInputId";
  var parent = document.getElementById("div"+elementCreateId);
  parent.appendChild(titleInput);

  let smallTextInput = document.createElement("textarea");
  smallTextInput.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
  smallTextInput.type="text";
  smallTextInput.className = "textInputClass";
  smallTextInput.id = "smallTextInputId";
  var parent = document.getElementById("div"+elementCreateId);
  parent.appendChild(smallTextInput);
}

function removeBlogInput(){
document.getElementById("div"+elementCreateId).remove();
elementCreateId--;
}