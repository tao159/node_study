var app = function() {
    console.log(app);
}

//app();

app.get = function() {
    console.log('app.get');
}

app.post = function() {
    console.log('app.post');
}

//app.get();

app.post();
app();