// Script here

var fetchData = [ {
  "name": "อายากะ",
  "surname": "คามิซาโตะ",
  "username": "ShirasagiHimegimi"
},
{
  "name": "ไรเดน",
  "surname": "โชกุน",
  "username": "CantCook"
},
{
  "name": "โคนัน",
  "surname": "เอโดงาวะ",
  "username": "SmallBodyBigBrain"
},
{
  "name": "อายาเมะ",
  "surname": "นาคิริ",
  "username": "CuteOni"
},
{
  "name": "โคโคมิ",
  "surname": "ซังโกโนมิยะ",
  "username": "SoleOfTheDeep"
},
{
  "name": "มิกุ",
  "surname": "ฮัตสึเนะ",
  "username": "Thankyou39"
} ]

var serchResultText = document.getElementById("search-result-text");
var serchResult = document.getElementById("search-result");

function CreateData(data){ 
  let nameContainer = document.getElementById("name-list");

  //reset component
  nameContainer.innerHTML = "";
  serchResult.style.visibility = "hidden";

  
  for(let i=0;i<data.length;i++){
    /*
    <div class="card">
      <h2 class="username">Username</h2>
      <p class="name">firstname lastname</p>
    </div>
    */
    let card = document.createElement("div");
    card.className = "card";
    let username = document.createElement("h2")
    username.className = "username";
    username.innerHTML = data[i].username;
    let name = document.createElement("p")
    name.className = "name";
    name.innerHTML = data[i].name + ' ' + data[i].surname;

    card.appendChild(username);
    card.appendChild(name);
    nameContainer.appendChild(card);
  }
}
CreateData(fetchData);

function reloadData(){
  //call fetchData()
  console.log("reload");
  CreateData(fetchData);
}

function Search(keyword){
  let SearchData = [];
  for(let i=0;i<fetchData.length;i++){
    if(fetchData[i].username === keyword || fetchData[i].name === keyword || fetchData[i].surname === keyword){
      SearchData.push(fetchData[i]);
    }
  }
  CreateData(SearchData);
  serchResultText.innerHTML = "ผลการค้นหา: " + keyword;
  serchResult.style.visibility = "visible";
}

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    Search(document.getElementById("search").value);
  }
});
