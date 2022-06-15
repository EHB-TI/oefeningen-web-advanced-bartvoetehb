

window.onload = 
async function(event) {
   let secretNumber = Math.floor(Math.random() * 5);
   console.log("secret: " + secretNumber);

    function compareNumber(nr) {
        return new Promise(function(resolve, reject) {
            console.log(typeof nr);
            console.log(nr);
            if(isNaN(nr)) {
                reject("Error not a number");
            } else {
                resolve(nr == secretNumber);
            }
        });
    }

    document.getElementById("guessForm").addEventListener("submit",function(event) {
        event.preventDefault();
        compareNumber(document.getElementById("guess").value).then(
            (result) => {
                console.log("result " + result);
            },
            (error) => {
                console.log(error);
            }
        )
    });


};

