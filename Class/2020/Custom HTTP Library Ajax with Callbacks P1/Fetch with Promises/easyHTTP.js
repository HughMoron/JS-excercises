/**
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version 1.0.0
 * @author FbW4
 * @license
 * 
 */

 class EasyHTTP{
     //Make an HTTP request
     get(url){
         return new Promise((resolve,reject)=>{
             fetch(url)
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err))
         })
     }
 }