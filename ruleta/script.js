function shuffle(array){
    var currentIndex = array.length, 
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function girar(){
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectItem = "";

    let shot = shuffle([1790, 2150, 2510]);
    let salvaste = shuffle ([1850, 2210, 2570]);
    let toma = shuffle ([1770, 2130, 2490]);
    let shots = shuffle ([1810, 2170, 2530]);
    let otravez = shuffle ([1750, 2110, 2470]);
    let cascada = shuffle ([1630, 1990, 2350]);
    let dos = shuffle ([1570, 1930, 2290]);

    let results = shuffle([
        shot [0],
        salvaste [0],
        toma [0],
        shots [0],
        otravez [0],
        cascada [0],
        dos [0],
    ]);

    if(shot.includes(results[0])) SelectedItem = "Toma un shot";
    if(salvaste.includes(results[0])) SelectedItem = "Te salvaste";
    if(toma.includes(results[0])) SelectedItem = "Elige quien toma";
    if(shots.includes(results[0])) SelectedItem = "Toma 5 shots";
    if(otravez.includes(results[0])) SelectedItem = "Gira otra vez";
    if(cascada.includes(results[0])) SelectedItem = "Tomadecascada";
    if(dos.includes(results[0])) SelectedItem = "Toma 2 shots";
   
   
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
    element.classList.add("animate");
    },5000);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    },6000);
}
    