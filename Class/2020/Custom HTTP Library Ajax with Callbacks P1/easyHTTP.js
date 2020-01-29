function easyHTTP() {
    this.http = new XMLHttpRequest()
}

//Make an HTTP GET Request
easyHTTP.prototype.get = function (url, whatev) {
    this.http.open("GET", url, true);
    this.http.onload = () => {
        this.http.status === 200 ?
            whatev({success: this.http.responseText}) //console.log(this.http.responseText)
            :{error: true, message: "There is an error."};
    };
    this.http.send();
}