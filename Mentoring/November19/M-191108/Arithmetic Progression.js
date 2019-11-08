////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// MENTORING 191108
///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

document.write("MENTORING 191108<br><br>")

////////////////////////////////////////////////////////////////////////
// Missing term in an Arithmetic Progression /////////////////////////////////
/////////////////////////////////////////777///////seven///////////7////
// [2,7,12,22]
let list = [1, 3, 5, 9, 11];
list = [2, 12, 17, 22]
//list = [2, 7, 12, 17, 22, 32]
//list = [1, 3, 4]
// list = [17, 24, 31, 45, 52, 59, 66, 73, 80, 87, 94, 101]
// list = [-9, -13, -21]


function findMissing(arr) {
    if (arr.length >= 3) {
        let diff1 = 0;
        let diff2 = 0;
        for (i = 2; i < arr.length; i++) {
            diff1 = (arr[i] - arr[i - 1]);
            diff2 = (arr[i - 1] - arr[i - 2]);
            if (diff1 != diff2) {
             if ([i - 2]==0){
                return `${(arr[1] + arr[0])/2}`
             }
                else{
                return `${(arr[i] + arr[i - 1])/2}`
            }}
        }
    } else {
        return `The Array:${arr} does not have enough items.`
    }
}

console.log(findMissing(list))