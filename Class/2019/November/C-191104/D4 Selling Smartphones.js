/////////////////////////////////////////////
// D-4 Selling Smartphones
/////////////////////////////////////////////

let balanceMy = 0;
let smrtphnPrice = 300;
let headPhone = 50;
let cover = 20;
let cstmrPreferences = {cellphone: true, headphones: true, cover: true, color: "green"};


function sllngSmrtphns (obj){
    //return obj.cellphone ? (balanceMy + smrtphnPrice) : ()
    let earnings = balanceMy;
    if ( obj.cellphone ){
        if (obj.headphones && obj.cover) {
            if (obj.color == "green"){
                earnings = ((balanceMy + smrtphnPrice + headPhone+ cover )*0.9) 

            }
        }
        else if(obj.headphones && obj.cover != true) {
               earnings = ((balanceMy + smrtphnPrice + headPhone )*0.9)  
        }
        
        else {
        earnings = (balanceMy + smrtphnPrice)}
     }


     else {
        earnings = balanceMy;
     }
     return `Your balance is ${earnings}.`
}

console.log(sllngSmrtphns(cstmrPreferences));