                              ///////// CHAPTER 43-48 //////////

    //Q1

// function showAlert() {
//     alert('You clicked the link!');
//   }

   //Q2

// function showAlertIMG(message) {
//     alert(message);
//   }


  //Q3

// function deleteRow(button) {
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }


  //Q5

// var counterElement = document.getElementById("counter");
// var counter = 0;

// function increaseCounter() {
//   counter++;
//   counterElement.textContent = counter;
// }

// function decreaseCounter() {
//   counter--;
//   counterElement.textContent = counter;
// }



                              ////////// CHAPTER 49 - 52 /////////////

 // Q1

// var form = document.getElementById('signup-form');
// var output = document.getElementById('output');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   var name = form.elements.name.value;
//   var email = form.elements.email.value;
//   var password = form.elements.password.value;

//   output.innerHTML = "<p>Name:</p>" + name + "<p>Email:</p>" +email +"<p>Password:</p>"+ password;

//   form.reset();
// });



// Q2


// function lorem() {
//     var expandedParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est?";
//     document.getElementById("lorem").innerHTML = expandedParagraph;
// }


//Q3


// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }