function hello(name,surname) {
    console.log(name);
    console.log(surname);
}

hello("Bart", "Voet");
test = ["Bart", "Voet"];
hello(test);
hello(...test);