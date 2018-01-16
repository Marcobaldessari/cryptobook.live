$(document).ready(function(){

 console.log("I m alive");

});


function getOrders() {
    console.log("Yo there, it's me, the button");
    //var orders = getMock();

    fetch('https://api.hitbtc.com/api/2/public/ticker')  
    .then(transformToJson)
    .then(logResponse)
    .then(addTableHeader)
    .then(addTableData)
    .catch(logResponse);

    /** internal functions */
    function logResponse(response) { 
        console.log("I M A PICKEL RIIIIIIICK!!!", response) 
        return response;
    };
    function transformToJson(response) { return response.json(); }
    function addTableHeader(response) {
        var keys = Object.keys(response[0]);
        keys.forEach(function addHeader(item) { 
            $('<th>'+item+'</th>').appendTo('#order-book');
        });
        return response;
    }
    function addTableData(response) {
        response.forEach(function addRow(order) { 
            $('<tr></tr>').appendTo('#order-book');
            Object.values(order).forEach(function addCell(val) { 
                $('<td>'+val+'</td>').appendTo($( "tr:last-of-type" ));
            });
        });
    }
}

function getMock() {
    var mock = [
        {
          "ask": "0.066282",
          "bid": "0.066114",
          "last": "0.066151",
          "open": "0.073035",
          "low": "0.064123",
          "high": "0.073116",
          "volume": "35905.772",
          "volumeQuote": "2461.306181899",
          "timestamp": "2018-01-16T11:41:58.679Z",
          "symbol": "DASHBTC"
        },
        {
          "ask": "0.0000006006",
          "bid": "0.0000005998",
          "last": "0.0000006006",
          "open": "0.0000007287",
          "low": "0.0000005500",
          "high": "0.0000007299",
          "volume": "905385200",
          "volumeQuote": "599.25785087",
          "timestamp": "2018-01-16T11:41:58.675Z",
          "symbol": "BCNBTC"
        },
        {
          "ask": "11895.06",
          "bid": "11890.28",
          "last": "11890.30",
          "open": "13706.75",
          "low": "11000.00",
          "high": "14320.52",
          "volume": "6110.76",
          "volumeQuote": "79989014.4484",
          "timestamp": "2018-01-16T11:41:58.744Z",
          "symbol": "BTCUSD"
        },
        {
          "ask": "0.000000654",
          "bid": "0.000000652",
          "last": "0.000000652",
          "open": "0.000000799",
          "low": "0.000000618",
          "high": "0.000000799",
          "volume": "559611000",
          "volumeQuote": "390.137179",
          "timestamp": "2018-01-16T11:41:58.680Z",
          "symbol": "DOGEBTC"
        },
        {
          "ask": "0.007748",
          "bid": "0.007712",
          "last": "0.007700",
          "open": "0.011000",
          "low": "0.006767",
          "high": "0.011020",
          "volume": "157694580",
          "volumeQuote": "1461650.92115",
          "timestamp": "2018-01-16T11:41:58.671Z",
          "symbol": "DOGEUSD"
        },
        {
          "ask": "0.000006169",
          "bid": "0.000006168",
          "last": "0.000006168",
          "open": "0.000006186",
          "low": "0.000005650",
          "high": "0.000008000",
          "volume": "99903",
          "volumeQuote": "0.658339679",
          "timestamp": "2018-01-16T11:41:49.430Z",
          "symbol": "DSHBTC"
        },
        {
          "ask": "0.00048700",
          "bid": "0.00048570",
          "last": "0.00048648",
          "open": "0.00052591",
          "low": "0.00044640",
          "high": "0.00059318",
          "volume": "155805.2",
          "volumeQuote": "80.243895394",
          "timestamp": "2018-01-16T11:41:56.463Z",
          "symbol": "EMCBTC"
        },
        {
          "ask": "0.091812",
          "bid": "0.091811",
          "last": "0.091811",
          "open": "0.094774",
          "low": "0.086704",
          "high": "0.096099",
          "volume": "78466.580",
          "volumeQuote": "7281.985717549",
          "timestamp": "2018-01-16T11:41:58.677Z",
          "symbol": "ETHBTC"
        },
        {
          "ask": "0.000027",
          "bid": "0.000025",
          "last": "0.000026",
          "open": "0.000030",
          "low": "0.000025",
          "high": "0.000031",
          "volume": "6598.95",
          "volumeQuote": "0.18146480",
          "timestamp": "2018-01-16T11:41:55.538Z",
          "symbol": "FCNBTC"
        },
        {
          "ask": "0.0020079",
          "bid": "0.0019900",
          "last": "0.0020023",
          "open": "0.0020844",
          "low": "0.0017454",
          "high": "0.0021090",
          "volume": "101865.83",
          "volumeQuote": "200.244559717",
          "timestamp": "2018-01-16T11:41:58.276Z",
          "symbol": "LSKBTC"
        }
      ];
      return mock;
}