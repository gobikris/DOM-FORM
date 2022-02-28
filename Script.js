// DOM MANIPULATION FORM

// container
let
container = document.createElement('div');
container.setAttribute('class','container');
container.classList.add('text-center');
document.body.append(container);


// h1

h1Tag = document.createElement('h1');
h1Tag.setAttribute('id','title');
h1Tag.innerHTML='DOM MANIPULATION FORM';
container.append(h1Tag);

// pTag

pTag = document.createElement('p');
pTag.setAttribute('id',"description");
pTag.innerText='FORM'
container.append(pTag);

// formTag

formTag = document.createElement('form');
formTag.setAttribute('id', 'form');
container.append(formTag);

// form-group div1 first name

div1 = document.createElement('div');
div1.setAttribute('class', 'form-group');
div1.innerText = "First name: ";

formTag.append(div1);

// Input code

// first name input

firstName = document.createElement('input');
firstName.setAttribute('type','text');
firstName.setAttribute('id', 'first-name')                          
firstName.setAttribute('placeholder', 'first name');
firstName.setAttribute('required',' ');
div1.append(firstName);

// div2 last name

div2 = document.createElement('div');
div2.setAttribute('class', 'form-group');
div2.innerText = "Last name: ";
formTag.append(div2);

//  last name - input  


lastName = document.createElement('input');
lastName.setAttribute('type','text');
lastName.setAttribute('id', 'last-name')
lastName.setAttribute('placeholder', 'last name');
lastName.setAttribute('required',' ');

div2.append(lastName);

// div3 pinCode


div3 = document.createElement('div');
div3.setAttribute('class', 'form-group');
div3.innerText = "Pincode: ";
formTag.append(div3);


// pinCode input


pinCode = document.createElement('input');
pinCode.setAttribute('type', 'text')
pinCode.setAttribute('id', 'pincode')
pinCode.setAttribute('placeholder', 'pincode')
pinCode.setAttribute('required', ' ')
div3.append(pinCode);


// div4 radio

div4 = document.createElement('div');
div4.classList.add("Gen");
div4.setAttribute('class', 'form-groupM');
div4.innerText="Gender: "

formTag.append(div4);


// radio input male



radioMale = document.createElement('input');
radioMale.setAttribute('type', 'radio')
radioMale.setAttribute('name', 'gender')
radioMale.setAttribute('id', 'male');
radioMale.innerText='Male';
div4.append(radioMale);
div4.append(" Male ");

// radio female


radioFemale = document.createElement('input');
radioFemale.setAttribute('type', 'radio');
radioFemale.setAttribute('name', 'gender');
radioFemale.setAttribute('id','female');
radioFemale.innerText='Female'
div4.append(radioFemale);
div4.append("Female ");


// div 5 textarea

div5 = document.createElement('div')
div5.setAttribute('class', 'form-group');
formTag.append(div5);


// text area input


textarea = document.createElement('textarea');
textarea.setAttribute('name', 'address');
textarea.setAttribute('id', 'address');
textarea.setAttribute('placeholder','Instruction');
textarea.setAttribute('cols','30');
textarea.setAttribute('rows','10');
div5.append ('Address:')
div5.append(textarea);


// div 6 email

div6 = document.createElement('div');
div6.setAttribute('class', 'form-group');
formTag.append(div6);


// email input


emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('placeholder', 'Sample@mail.com');
emailInput.setAttribute('required', '');
div6.append ('Email: ');
div6.append(emailInput);


// div  form-group food
food = document.createElement("div");
food.classList.add("form-group2");
food.innerHTML = "Choice of food:  ";
formTag.append(food);


// food - Chicken
Chicken = document.createElement("input");
Chicken.setAttribute("type", "checkbox");
Chicken.setAttribute("class", "food");
Chicken.setAttribute("id", "Chicken");
Chicken.setAttribute("name", "food");
Chicken.innerHTML = "Chicken";
food.append(Chicken);
food.append(" Chicken ");

// food - Fish
Fish = document.createElement("input");
Fish.setAttribute("type", "checkbox");
Chicken.setAttribute("class", "food");
Fish.setAttribute("id", "Fish");
Fish.setAttribute("name", "food");
Fish.innerHTML = "Fish";
food.append(Fish);
food.append(" Fish ");


//  food - Parota
Parota = document.createElement("input");
Parota.setAttribute("type", "checkbox");
Chicken.setAttribute("class", "food");
Parota.setAttribute("id", "Parota");
Parota.setAttribute("name", "food");
Parota.innerHTML = "Parota";
food.append(Parota);
food.append(" Parota ");

// food - Poori
Poori = document.createElement("input");
Poori.setAttribute("type", "checkbox");
Chicken.setAttribute("class", "food");
Poori.setAttribute("id", "Poori");
Poori.setAttribute("name", "food");
Poori.innerHTML = "Poori";
food.append(Poori);
food.append(" Poori ");

// food - Dosa
Dosa = document.createElement("input");
Dosa.setAttribute("type", "checkbox");
Chicken.setAttribute("class", "food");
Dosa.setAttribute("id", "Dosa");
Dosa.setAttribute("name", "food");
Dosa.innerHTML = "Dosa";
food.append(Dosa);
food.append(" Dosa ");

// state div 
stateDiv = document.createElement("div");
stateDiv.classList.add("form-group");
stateDiv.innerHTML = "State:"
formTag.append(stateDiv);

// State Input
stateInput = document.createElement("input");
stateInput.setAttribute("type", "text");
stateInput.setAttribute("id", "state");
stateInput.setAttribute("placeholder", "State")

stateDiv.append(stateInput);

// div Country
countryDiv = document.createElement("div");
countryDiv.innerHTML = "Country:"
countryDiv.classList.add("form-group")
formTag.append(countryDiv);

// Input Country 
countryInput = document.createElement("input");
countryInput.setAttribute("type", "text")
countryInput.setAttribute("id", "country")
countryInput.setAttribute("placeholder", "Country")

countryDiv.appendChild(countryInput);


// div  btn

 
buttonDiv = document.createElement("div");
formTag.append(buttonDiv);

// submit button

buttonSubmit = document.createElement("button");
buttonSubmit.classList.add("btn-primary");
buttonSubmit.classList.add("form-group")
buttonSubmit.classList.add("btn");
buttonSubmit.setAttribute("type", "submit");
buttonSubmit.setAttribute("id", "submit");
buttonSubmit.innerHTML = "submit";
buttonDiv.appendChild(buttonSubmit);

//  Button - Validate
 
button = document.getElementById("submit").addEventListener("click", validate)

// br tag before table

 brTag = document.createElement("br");
formTag.append(brTag);


// Table

divTable = document.createElement('div');
divTable.setAttribute('class', 'table-div');
formTag.append(divTable);


// table tag

tableTag = document.createElement('table');
tableTag.classList.add("table", "table-bordered","border-dark","bg-secondary","text-white");
divTable.append(tableTag);


// thead tag

theadTag = document.createElement('thead');
theadTag.classList.add('bg-success')
tableTag.append(theadTag);

// tr head tag


trTag = document.createElement('tr');
theadTag.append(trTag);


// 8 th tags 

thTag = document.createElement('th');
thTag.innerHTML="First Name";
trTag.append(thTag);


thTag2 = document.createElement('th');
thTag2.innerHTML="Last Name";
trTag.append(thTag2);


thTag3 = document.createElement('th');
thTag3.innerHTML="Gender";
trTag.append(thTag3);


thTag4 = document.createElement('th');
thTag4.innerHTML="Address";
trTag.append(thTag4);


thTag5 = document.createElement('th');
thTag5.innerHTML="Pincode";
trTag.append(thTag5);



thTag6 = document.createElement('th');
thTag6.innerHTML="Choice of Food";
trTag.append(thTag6);


thTag7 = document.createElement('th');
thTag7.innerHTML="State";
trTag.append(thTag7);


thTag8 = document.createElement('th');
thTag8.innerHTML="Country";
trTag.append(thTag8);


// Table body tag

tbody = document.createElement('tbody');
tableTag.append(tbody);

// tbody tr tag

tr1 = document.createElement('tr');
tbody.append(tr1);

// 8 tr tag in tr body tag

tr2 = document.createElement('td');
tr2.setAttribute('id', "td1")
tr1.append(tr2);


tr3 = document.createElement('td');
tr3.setAttribute('id',"td2");
tr1.append(tr3);


tr4 = document.createElement('td');
tr4.setAttribute('id',"td3");
tr1.append(tr4);


tr5 = document.createElement('td');
tr5.setAttribute('id',"td4");
tr1.append(tr5);


tr6 = document.createElement('td');
tr6.setAttribute('id',"td5");
tr1.append(tr6);


tr7 = document.createElement('td');
tr7.setAttribute('id',"td6");
tr1.append(tr7);


tr8 = document.createElement('td');
tr8.setAttribute('id',"td7");
tr1.append(tr8);

 
tr9 = document.createElement('td');
tr9.setAttribute('id',"td8");
tr1.append(tr9);


// function code

// function Creation
function validate(event) {
    event.preventDefault()

    // Create the variables in all Elements
    firstName = document.getElementById("first-name").value;
    lastName = document.getElementById("last-name").value;
    Address = document.getElementById("address").value;
    pinCode = document.getElementById("pincode").value;
    State = document.getElementById("state").value;
    Country = document.getElementById("country").value;

    // Gender if and else condtion checking
    var Gender;
    Gender_Male = document.getElementById("male")
    Gender_Female = document.getElementById("female")
    if (Gender_Male.checked == true) {
        console.log("female")
        Gender = "male"
    } else if (Gender_Female.checked == true) {
        console.log("male")
        Gender = "female"
    } else {
        Gender = ""
    }

    // Food-List Create the variables
    str = ""
    Food_List_1 = document.getElementById("Chicken").value;
    Food_List_2 = document.getElementById("Fish").value;
    Food_List_3 = document.getElementById("Parota").value;
    Food_List_4 = document.getElementById("Poori").value;
    Food_List_5 = document.getElementById("Dosa").value;
    // Food list condtion checking 
    if (Chicken.checked == true) {
        str += "Chicken, "
    }
    if (Fish.checked == true) {
        str += "Fish, "
    }
    if (Parota.checked == true) {
        str += "Parota, "
    }
    if (Parota.checked == true) {
        str += "Parota, "
    }
    if (Dosa.checked == true) {
        str += "Dosa, "
    }

    // Get the values and Print the table
    document.getElementById("td1").innerHTML = firstName;
    document.getElementById("td2").innerHTML = lastName;
    document.getElementById("td3").innerHTML = Gender;
    document.getElementById("td4").innerHTML = Address;
    document.getElementById("td5").innerHTML = pinCode;
    document.getElementById("td6").innerHTML = str;
    document.getElementById("td7").innerHTML = State;
    document.getElementById("td8").innerHTML = Country;
}













