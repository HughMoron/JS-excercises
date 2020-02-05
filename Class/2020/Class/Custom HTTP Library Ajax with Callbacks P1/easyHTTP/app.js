const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    document.createElement("div").appendChild.createTextNode(`There is an error: ${this.http.status}`);
  } else {
    document.createElement("ul")
  }
});
