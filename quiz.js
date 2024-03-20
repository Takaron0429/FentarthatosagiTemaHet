let kerdes = document.getElementById("kerdestext");
let lehetoseg1 = document.getElementById("lehetoseg1");
let lehetoseg2 = document.getElementById("lehetoseg2");
let lehetoseg3 = document.getElementById("lehetoseg3");
let valasz1 = document.getElementById("valasz1");
let valasz2 = document.getElementById("valasz2");
let valasz3 = document.getElementById("valasz3");
let kerdeskep = document.getElementById("kerdeskep");
let tipp = document.getElementById("tipp");
let nextbutton = document.getElementById("nextbutton");
let progressbar = document.getElementById("quizprogressbar");
let quizprogressvalues = document.getElementById("quizprogressvalues");
let index = 0;
let kszam = 1;
let pontszam = 0;

fetch("json.json")

    .then((response) => response.json())
    .then((data) => {

        let kerdesekszama = data.kerdesek.length;
        let element = data.kerdesek[index];

        kerdes.innerHTML = kszam + "." + element.kerdes;

        lehetoseg1.innerHTML = element.valasz1;
        lehetoseg2.innerHTML = element.valasz2;
        lehetoseg3.innerHTML = element.valasz3;

        valaszpont1.innerHTML = element.valasz1pontszam;
        valaszpont2.innerHTML = element.valasz2pontszam;
        valaszpont3.innerHTML = element.valasz3pontszam;

        kerdeskep.src = element.kep;
        tipp.innerHTML = element.tipp;

        let pbwidth = 100/kerdesekszama;
        progressbar.style.width = pbwidth + "%";

        function quizKerdesek()
        {       
            kerdes.innerHTML =  kszam + "." + element.kerdes;
            lehetoseg1.innerHTML = element.valasz1;
            lehetoseg2.innerHTML = element.valasz2;
            lehetoseg3.innerHTML = element.valasz3;
            valaszpont1.innerHTML = element.valasz1pontszam;
            valaszpont2.innerHTML = element.valasz2pontszam;
            valaszpont3.innerHTML = element.valasz3pontszam;
            kerdeskep.src = element.kep;
            tipp.innerHTML = element.tipp;
        }

        function pontozas()
        {
            let selected = 0;

            if (valasz1.checked) 
            {
                selected = element.valasz1pontszam;
                pontszam += parseInt(selected);
            } 
            else if (valasz2.checked) 
            {
                selected = element.valasz2pontszam;
                pontszam += parseInt(selected)
            } 
            else if (valasz3.checked) {
                selected = element.valasz3pontszam;
                pontszam += parseInt(selected)
            }
        }
     
        nextbutton.addEventListener("click", () => {
            index++;
            kszam++;
            element = data.kerdesek[index];
            quizKerdesek();
            pontozas();
            console.log(index, element);
            pbwidth += 100/kerdesekszama;
            progressbar.style.width = pbwidth + "%";
        });

    });