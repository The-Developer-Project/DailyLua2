fetch('data.json')
.then(response => response.json())
.then(data => {
    if (data.name === "empty") {
        window.location.href = "./login.html"
    } else {
        console.log("Already Logged In");
    }
})
.catch(error => console.error(error));