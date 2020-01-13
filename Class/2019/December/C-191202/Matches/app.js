// Element.matches (css-selector) does not llok for anything, it merely checks if the element matches the given css-selector. returns true, otherwise it returns false.

// The method comes in handy when we are iterating over elements( for example array or anything similar) and trying to filter out those that interest us.

const elements = document.body.children;
for (let elem of elements){
    if (elem.matches("a[href$='zip']")){
        console.log(`The archive reference: ${elem.href}`)
    }
}

















