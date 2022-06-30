// Script here

var fetchedData = {};
async function fetchData() {
  console.log("start fetching data")
  const response = await fetch(
    'http://isd-test.cucheck.in/users',
		{
      method: 'GET'
		}
  );
  if (!response.ok) {
     throw new Error("fetch data - error status: " + response.status);
  }
  console.log("fetch data - success");
  fetchedData = await response.json();
  console.log("fetch data - complete");
  CreateData(fetchedData);
}
fetchData();
  
var serchResultText = document.getElementById("search-result-text");
var serchResult = document.getElementById("search-result");

function CreateData(data){ 
  console.log("start creating data");
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

function Search(keyword){
  let SearchData = [];
  for(let i=0;i<fetchedData.length;i++){
    if(fetchedData[i].username === keyword || fetchedData[i].name === keyword || fetchedData[i].surname === keyword){
      SearchData.push(fetchedData[i]);
    }
  }
  CreateData(SearchData);
  serchResultText.innerHTML = "ผลการค้นหา: " + keyword;
  serchResult.style.visibility = "visible";
}

//press enter to search
document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    Search(document.getElementById("search").value);
  }
});
