const http = new easyHTTP;
http.get("https://jsonplaceholder.typicode.com/posts",function(items){
    items.error?document.write(items.message): document.write(items.success)
    console.log(items)
});
