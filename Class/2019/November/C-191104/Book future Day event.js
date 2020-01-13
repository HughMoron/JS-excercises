//////////////////////////////////////////////////////////
/// C-191104
//////////////////////////////////////////////////////////

document.write("C-191104")

//////////////////////////////////////////////////////////

let today = new Date()
let futureDate = new Date('12-31-2019 00:00:00')

function bookFuture (date1,date2){
if (date1 < date2){
    return `Your book to the event for ${futureDate} is already guaranteed!`
}
else {
    return 'Your request is before today. Please select another date.'
}
}

console.log(bookFuture(today,futureDate))