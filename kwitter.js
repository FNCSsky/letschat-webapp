function addUser() {

    user_name = document.getElementById("user_name").value

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";



}

function addRoom() {


    
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
<div>
    ""          
        </div>
//End code
});});}
getData();

function redirectToRoomName () {


    
}

    function logout() {



        
    }

    function send() {


        
    }

