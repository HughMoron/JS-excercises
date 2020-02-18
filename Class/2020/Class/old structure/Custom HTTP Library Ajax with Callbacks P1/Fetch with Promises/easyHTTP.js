/**
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version 1.0.0
 * @author FbW4
 * @license
 * 
 */

class EasyHTTP {
    //Make an HTTP request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    // Make an HTTP Post Request 
    post(url, data) {
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: "PUT",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

//Make an HTTP Delete Request
delete(url){
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method: "DELETE",
            headers: {
                "Content-type":"application/json"
            }
        })
        .then(res => res.json())
        .then(()=>resolve("Done!"))
        .catch(err => reject(err))
    })
}
}
