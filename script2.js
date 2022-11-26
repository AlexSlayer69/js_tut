import data from './data.json' assert {type: 'json'};

var cards = document.getElementsByClassName('card');
console.log(cards[0].getElementsByClassName("content").innerHTML);


for(var i = 0;i < cards.length;i++){

    var divs = cards[i].getElementsByClassName("content");
            console.log(divs[0]);

            divs[0].innerHTML = "Ride Id :" +data['Ride Id'] + "<br>"
            + "Origin Station :" + data['Origin Station'] + "<br>"
            + "station_path :" + data['station_path'] + "<br>"
            + "Date :" + data['Date'] + "<br>"
            + "Distance :" + data['Distance'] ;
        
}
