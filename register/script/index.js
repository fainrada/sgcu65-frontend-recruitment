// Script here
var submit_button = document.getElementById("submit-button");
var field_id = ["fname","lname","uname","email","pw","confirmpw"];

submit_button.onclick = function(){
    
    var input_field = [];
    for(var i=0;i<field_id.length;i++){
        input_field[i] = document.getElementById(field_id[i]);
        if(input_field[i].value.length == 0){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
    }
    var validUsernameRegex = /^[a-zA-Z0-9]*$/;
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input_field[2].value.match(validUsernameRegex)){
        alert("ชื่อผู้ใช้ต้องประกอบด้วยตัวอักษรภาษาอังกฤษหรือตัวเลขเท่านั้น");
    }
    else if (!input_field[3].value.match(validEmailRegex)){
        alert("อีเมลผิดรูปแบบ");
    }
    else if (!input_field[4].value === input_field[5].value){
        alert("รหัสผ่านกับยืนยันรหัสผ่านไม่ตรงกัน")
    }
    else{
        console.log("valid input");
        //TODO: call api//
        window.location.href = "../name-list/index.html";  // change page
    } 
}