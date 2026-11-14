
function display(name, callback) {
    console.log("Hello " + name);

    callback();
}

function message() {
    console.log("Welcome to Node.js");
}

display("Nilam", message);
