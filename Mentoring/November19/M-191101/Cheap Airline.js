////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// MENTORING 191101
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("MENTORING 191101<br><br>")

////////////////////////////////////////////////////////////////////////
// DHL Package Challenge /////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
document.write("Cheap Airline Tickets<br><br>")

let airlinePrices = [
    {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
    {airlinesName: 'Aegean', avgPriceTicket: 65.8},
    {airlinesName: 'KLM', avgPriceTicket: 102.82},
    {airlinesName: 'British Airways', avgPriceTicket: 114.9},
    {airlinesName: 'Iberia', avgPriceTicket: 77.2},
    {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
    {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
    {airlinesName: 'Air France', avgPriceTicket: 105.6},
    {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
    {airlinesName: 'Emirates', avgPriceTicket: 135.4},
  ]
  
function avgTicket (arr) {
    let chpAirlines = []
    for (i= 0; i<arr.length; i++)
    if (arr[i].avgPriceTicket <=100){
        chpAirlines.push(arr[i].airlinesName)
    }
    return `The following Airlines are fairly cheap: ${chpAirlines}`
}

console.log(avgTicket(airlinePrices))






































































