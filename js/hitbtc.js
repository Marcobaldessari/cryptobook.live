$(document).ready(function(){

 console.log("I m alive");

});


function getOrders() {
    console.log("Yo there, it's me, the button");
    fetch('https://api.hitbtc.com/api/2/public/ticker')  
        .then(transformToJson)
        .then(logResponse);

    /** internal functions */
    function transformToJson(response) { return response.json(); }
    function logResponse(response) { console.log(response); };
}