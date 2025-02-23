let email = document.getElementById('email');
let password = document.getElementById('password');
let logincontainer = document.getElementById('logincontainer');
let Useremail = document.getElementById('user-email');
let Homecontainer = document.getElementById('Homecontainer');
let note = document.getElementById('note');

function loginUser() {
    if (!email.value || !password.value)
        return alert("Please add Email and Password");
    localStorage.setItem("email", email.value);
    checkIsUserLogin();
}

function checkIsUserLogin() {
    var email = localStorage.getItem("email");
    if (email) {
        logincontainer.style.display = 'none';
        Homecontainer.style.display = 'block';
        Useremail.innerText = email;
        displayusernotes();
    } else {
        logincontainer.style.display = 'block';
        Homecontainer.style.display = 'none';
    }
}

checkIsUserLogin();

function logout() {
    localStorage.removeItem("email");
    checkIsUserLogin();
}

function submitUserNotes() {
    var email = localStorage.getItem("email");

    var obj = {
        email: email,
        notes: note.value,
    };
    // console.log(obj)

    savevaluetolocalstorage(obj);
    note.value = "";
}

function savevaluetolocalstorage(obj) {
    var notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes) {
        notes = JSON.parse(notes);
        notes.push(obj);
        localStorage.setItem("notes", JSON.stringify(notes));
    } else {
        notes = [obj];
        // console.log(note)
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    displayusernotes();
}

function displayusernotes() {
    var notes = localStorage.getItem("notes");
    var list = document.getElementById("list");
    var email = localStorage.getItem("email");
    if (notes) {
        list.innerHTML = "";
        notes = JSON.parse(notes);
        console.log(notes);
        notes.forEach(function (data, ind) {
            console.log("data==>", data);
            if (data.email === email) {
                var liElement = `<li class="border rounded p-2 my-2 ">
                <p class="font-bold">${data.notes}</p>
                <p>${data.email}</p>
                <div class="flex justify-end items-end space-x-2 mr-2">
                <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteNote(${ind})">Delete</button>
                <button class="bg-blue-500 text-white px-2 py-1 rounded" onclick="editNote(${ind})">Edit</button>
                </div>
                </li>`;
                list.innerHTML += liElement;
            }
        });
    }
}

displayusernotes();

function deleteNote(index) {
    var notes = localStorage.getItem("notes");
    if (notes) {
        notes = JSON.parse(notes);
        if (confirm("Are you sure to delete your Note?")) {
            notes.splice(index, 1); // Remove the note at the specified index
            localStorage.setItem("notes", JSON.stringify(notes));
            displayusernotes(); // Refresh the displayed notes
            alert("Deleted successfully");
        }
    }
}

function editNote(index) {
    var notes = localStorage.getItem("notes");
    if (notes) {
        notes = JSON.parse(notes);
        var noteToEdit = notes[index];
        var newNote = prompt("Edit Your Note:" , noteToEdit.notes.value)
        if (newNote !== null) {
            notes[index].notes = newNote;
            localStorage.setItem("notes", JSON.stringify(notes));
            displayusernotes();
            alert("Note updated successfully");
        }
    }
}