const btn = document.getElementById('submitForm');
const form = document.getElementById('form');

var fs = require('fs');

function successCallBack(data) {
    data.listings.push({
        "hello": "world"
    });
};

function newListing() {

    let itemName = document.getElementById('itemName');
    let price = document.getElementById('price');
    let userName = document.getElementById('userName');
    let contact = document.getElementById('userContact');

    const message = {
        itemName: itemName.value,
        price: price.value,
        userName: userName.value,
        contact: contact.value,
    };

    const fetchOptions = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message),
    };
    
    if(fetch('http://localhost:4000/addListing', fetchOptions)) {
        // $.getJSON('listings.json', successCallBack);
        alert(`${userName.value}, your listing has been completed!`);
    }

};

function initButtonChecks(e) {
    e.preventDefault();
    // newListing();

    FileSystem.open('listings.json');
}

btn.addEventListener('click', initButtonChecks);

// Add listings to a json from the form