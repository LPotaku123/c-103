const firebaseConfig = {
    apiKey: "AIzaSyA7gm3kTjie0qYWagz01HAALvWrlri10xg",
    authDomain: "vamos-conversar-23813.firebaseapp.com",
    projectId: "vamos-conversar-23813",
    storageBucket: "vamos-conversar-23813.appspot.com",
    messagingSenderId: "388215021854",
    appId: "1:388215021854:web:635f770e11fb752b52690f",
    measurementId: "G-887YCEQWV9"

    
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Bem-vindo" + user_name + "!";
  function addRoom ()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitterPage.html";
  }

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Nome da Sala - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();
  
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }