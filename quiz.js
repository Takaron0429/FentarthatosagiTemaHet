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


fetch("json.json")

    .then((response) => response.json())
    .then((data) => {

        let kerdesekszama = data.kerdesek.length;
        let element = data.kerdesek[index];

        kerdes.innerHTML = element.kerdes;
        lehetoseg1.innerHTML = element.valasz1;
        lehetoseg2.innerHTML = element.valasz2;
        lehetoseg3.innerHTML = element.valasz3;
        valasz1.innerHTML = element.valasz1pontszam;
        valasz2.innerHTML = element.valasz2pontszam;
        valasz3.innerHTML = element.valasz3pontszam;
        kerdeskep.src = element.kep;
        tipp.innerHTML = element.tipp;

        let pbwidth = 100/kerdesekszama;
        progressbar.style.width = pbwidth + "%";

        function quizKerdesek()
        {
            kerdes.innerHTML = element.kerdes;
            lehetoseg1.innerHTML = element.valasz1;
            lehetoseg2.innerHTML = element.valasz2;
            lehetoseg3.innerHTML = element.valasz3;
            valasz1.innerHTML = element.valasz1pontszam;
            valasz2.innerHTML = element.valasz2pontszam;
            valasz3.innerHTML = element.valasz3pontszam;
            kerdeskep.src = element.kep;
            tipp.innerHTML = element.tipp;
        }
     

        console.log(kerdesekszama);

        nextbutton.addEventListener("click", () => {
            index++;
            element = data.kerdesek[index];
            quizKerdesek();
            console.log(index, element);
            pbwidth += 100/kerdesekszama;
            progressbar.style.width = pbwidth + "%";
        });

    });