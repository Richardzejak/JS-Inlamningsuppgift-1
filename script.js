/* Då jag använde javascript för första gången stötte jag på flertal buggar, där jag inte hade något aning om vad jag gjorde för fel, mitt tillvägagångssätt för att lista ut och lösa dessa buggarna var att jag öppnade sidan i min browser (Google Chrome) i detta fall, tryckte på f12 för att öppna inspectorn, och där igenom gick jag till "Sources", klickade mig in på script.js.
Huvudproblemet jag hade i denna koden var att kontrollera mina variabler, jag hade flera olika variabler jag var tvungen att hålla koll på, som skulle innehålla olika nummer, för att göra detta lade jag till variablerna i "Watch" där jag både kunde refresha för att se om variablernas värden hade förändrats, men också lägga breakpoints i koden för att se om de ändrades korrekt. med hjälp av detta kunde jag även testa om min eventlistener fungerade genom att se ifall variabler ändrades när eventet skulle ske. */

let elementCount =0;
let elementChange =0;
let elementCreateId =1;

// Nedan har jag eventlistenern för denna koden, nyckelordet 'change' som jag använder körs när <input>, <select> och <textarea> triggas, jag använde mig av denna eftersom den fungerar både när jag ökar/sänker min input via knapparna, men också ändrar nummret manuellt via att skriva in text. så fort jag skrivit då och unselectar inputen körs denna också, eller trycker "enter" eller "tab". När detta event körs, kallas funktionen "setEqual()" som ser efter vilket nummer inputen har och därefter skickar en till korrekt funktion, genom så stor ändringen av inputen var.
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

// Denna funktionen skickas det till ifall ändringen i input var positiv, vilket då i huvudsak ska ska skapa element i index.html.
function createBlogInput(){

  elementCreateId++;
// här skapas divs, som sedan läggs som en child till box-container-id. jag har även lagt till en elementCreateId variabel som ökas varje gång denna funktionen körs så att divsen kan få varsinna id'n, vilket förenklar det för mig när jag ska ta bort dom i andra funktionen samt inspektera sidan.
 let div = document.createElement("div");
  div.id = "div"+elementCreateId;
  var parent = document.getElementById("box-container-id");
  parent.appendChild(div);

// här skapas titeln som är input, att texten då ska kunnas ändra av användaren, den läggs in som child till diven vi skapade ovan, vilket också är en anledning att vi använde oss av elementCreateId så att rätt titel läggs in i rätt div.
  let titleInput = document.createElement("Input");
  titleInput.value = "Title"+(elementCreateId-1);
  titleInput.type="text";
  titleInput.className = "titleInputClass";
  titleInput.id = "titleInputId";
  var parent = document.getElementById("div"+elementCreateId);
  parent.appendChild(titleInput);

// På samma sätt som titeln skapades, skapas textarea, och därefter läggs in som child till rätt div, anledningen att jag använde mig av textarea här istället för input är för att jag kunde inte få input att ändra rad när den når sin gridcolumns kant, textarea respekterar sina kanter från början och gör så att texten bytar rad därefter.
  let smallTextInput = document.createElement("textarea");
  smallTextInput.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
  smallTextInput.type="text";
  smallTextInput.className = "textInputClass";
  smallTextInput.id = "smallTextInputId";
  var parent = document.getElementById("div"+elementCreateId);
  parent.appendChild(smallTextInput);
}

// den här funktionen kallas på när ändringen i nummerinputten var negativ, vilket då tar bort diven (och automatiskt dens childrens) vilket har id samma som elementcreateid, vilket är högsta, alltså senaste diven som skapades, därefter sänker den elementCreateId med 1 så att elementCreateId förhåller sig mellan hur många divs det finns samt vad nummerinputten är satt till.
function removeBlogInput(){
document.getElementById("div"+elementCreateId).remove();
elementCreateId--;
}