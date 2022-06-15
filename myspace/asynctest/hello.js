

window.onload = async () => {

    /* Using callbacks */
    // function loadScript(src, callback) {
    //     let script = document.createElement("script");
    //     script.src = "math.js";
    //     script.onload = () => callback(script);
    //     document.head.append(script);
    // }
    // loadScript("math.js", (src)=> console.log(sum(1,2)));

     /* Tryout promises */
    // let promise = new Promise((resolve, reject) => {
    //     console.log('Start of promise');
    //     setTimeout(() => resolve("I'm done"), 2000);
    //     console.log("end of promise");
    //     //reject("It's broken");
    // });

    // promise.then(
    //     result => console.log(result),
    //     error => console.log(error)
    // );

    // promise.catch(
    //     error => console.log("test")
    // ).finally(
    //     error => console.log("finally")
    // )

    /* Use promises for the first example */
    // function loadScript(src) {
    //     let promise = new Promise((resolve, reject) => {
    //             let script = document.createElement("script");
    //             script.src = src;
    //             script.onload = () => resolve(script);
    //             script.onerror = () => reject(script);
    //             document.head.append(script);
    //     });
    //     return promise;
    // }

    // let p = loadScript("math.js");
    // p.then(
    //     result => {
    //         console.log(result);
    //         console.log(sum(1,2));
    //     },
    //     error => console.log(error)
    // ).catch(
    //     error => console.log("test")
    // ).finally(
    //     fin => console.log("finally")
    // )
/* first try async */
    // async function test() {
    //     return 1;
    // }
    // test().then(result => console.log(`result = ${result}`));

/* Test async with load script*/
    // async function loadScript(src) {
    //     let promise = new Promise((resolve, reject) => {
    //             let script = document.createElement("script");
    //             script.src = src;
    //             script.onload = () => resolve(script);
    //             script.onerror = () => reject(script);
    //             document.head.append(script);
    //     });
    //     return promise;
    // }

    // let result = await loadScript("math.js");
    // console.log(result);
    // console.log(sum(1,2));

    /* tset with */
    console.log("loaded");

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(resp => {return resp.json();})
    // .then(data => {console.log(data)});

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(resp => { 
    //         return resp.json(); 
    // }).then(
    //     data => { 
    //         console.log(data) ;
    //         //here can you do dom-manipulation
    //     } 
    // );

    async function getData() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(response.status == 200) {
            return await response.json();
        }
    }
    //console.log(await getData());

    //preferable
    getData().then(data => {
         console.log(data);
         //document.getElementById("message").innerHTML = JSON.stringify(data);
    });

    // let data = await getData();



}

