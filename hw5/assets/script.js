async function getUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    let responce = await fetch(url);
    if (responce.ok) {
        let json = await responce.json();
            json.forEach(element => {
            localStorage.setItem(`${element.name}`, `${element.email}`)
        });
    } else {
        console.log(responce.status);
    }
    printLocalStorage();
}

function printLocalStorage() {
    let users = document.getElementById("users");
    let html = "";
    for(let i=0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let htmlSegment = `<div class="user">
                    <h3>${key}</h3>
                    <p>${localStorage.getItem(key)}</p>
                    </div>`;
    html += htmlSegment;
    }
    users.innerHTML = html;
}

function clearLocalStorage() {
    localStorage.clear();
    let users = document.getElementById("users");
    let html = "";
    users.innerHTML = html;
}

async function postMethod(event) {
    event.preventDefault();
    let url = "https://jsonplaceholder.typicode.com/users";
    let name = document.getElementsByTagName('input')[0].value;
    let email = document.getElementsByTagName('input')[1].value;
    let data = {'name':`${name}`, 'email':`${email}`};
    let responce = await fetch(url,
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    });
    alert(responce.status);
    if (responce.ok) {
        localStorage.setItem(name, email);
        printLocalStorage();
        document.getElementById('inputform').reset();
    }
}

let getusersBtn = document.getElementById("getusers");
getusersBtn.addEventListener('click', getUsers);

let clearStorBtn = document.getElementById("clearstorage");
clearStorBtn.addEventListener('click', clearLocalStorage);

let form = document.getElementById('inputform');
form.addEventListener('submit', postMethod);