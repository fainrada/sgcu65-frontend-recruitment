// Script here
var submit_button = document.getElementById("submit-button");
var field_id = ["fname","lname","uname","email","pw","confirmpw"];

async function postData(data) {
    console.log("start posting data")
    await fetch(
      'http://isd-test.cucheck.in/users',
        {
            method: "POST",
            headers: {'accept': '*/*','Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
        }
    ).then(res => {
        console.log("Request complete - response: ", res);
        if(!res.ok) {
            return res.text().then(text => { throw new Error(text) })
        }
        else {
            window.location.href = "../name-list/index.html";  // change page
        }    
    })
    .catch(err => {
        var jsonRes = JSON.parse(err.message);
        alert(jsonRes.message[0]);
    });
}

submit_button.onclick = function(){
    var input_field = [];
    for(var i=0;i<field_id.length;i++){
        input_field[i] = document.getElementById(field_id[i]);
        if(input_field[i].value.length == 0){
            alert("please fill in all fields");
            return;
        }
    }
    var validUsernameRegex = /^[a-zA-Z0-9]*$/;
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input_field[2].value.match(validUsernameRegex)){
        alert("username must contain only letters and numbers");
    }
    else if (!input_field[3].value.match(validEmailRegex)){
        alert("invalid email format");
    }
    else if (!(input_field[4].value === input_field[5].value)){
        alert("password doesn't match confirmation");
    }
    else{
        console.log("valid input");
        //TODO: call api//
        var data = { 
            username: input_field[2].value, 
            name: input_field[0].value, 
            surname: input_field[1].value, 
            email: input_field[3].value, 
            password: input_field[4].value };
        console.log(data);
        console.log(JSON.stringify(data));
        postData(data);
    } 
}