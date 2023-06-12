function seperator(tempS) {
    if (Boolean(tempS)) {
        var dataList = tempS.split(',');
        var cleanData = [];
        for (let data of dataList) {
            data = data.replace(/"/g, "");
            var splitPoint = data.indexOf(":");
            data = data.slice(splitPoint + 1, data.length).trim();
            cleanData.push(data);
        }
        let itemName = cleanData[0];
        let price = cleanData[1];
        let userName = cleanData[2];
        let userContact = cleanData[3];

        if (parseInt(price) == 0) {
            price = "FREE"; 
        } else {
            price = "£ " + price;
        }
        
        document.getElementById("list").innerHTML +=
        `
        <div class="listing">
            <div class="lst-image">
                <img src="placeholder.jpg" alt="Image Not Found">
            </div>
            <div class="lst-info-top">
                <p class="lst-item"> ${itemName} </p>
                <p class="lst-price"> ${price} </p>
            </div>
            <div class="lst-info-bottom">
                <p class="lst-name"> ${userName} </p>
                <p class="lst-contact"> ${userContact} </p>
            </div>
        </div>
        `;
    }
}

function onSP(text) {
    let temp = text.replace(/[\[\]]+/g, "")
    const lns = temp.split('},');
    for (let ln of lns) {
        ln = ln.replace(/}|{|$/g, "");
        let newTemp = seperator(ln);
    }
}

function onResonse(response) {
    console.log(response);
    response.text().then(onSP);
}

function onError(e) {}

function jsonFetch(path) {
    fetch(path)
    .then(onResonse, onError);
}

var response, data = jsonFetch("listings.json");