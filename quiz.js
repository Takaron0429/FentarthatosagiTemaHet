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
let ponttext = document.getElementById("ponttext");
let quizdiv = document.getElementById("quizdiv");
let quizGame = document.getElementById("quizGame");
let quizprogressbar = document.getElementById("quizprogressbar");
let result = document.getElementById("results");
let pontstring = document.createElement("p");
let resultstring = document.createElement("div");
let backToMainPageButton = document.createElement("button");
let index = 0;
let kszam = 1;
let pontszam = 0;
let selected = 0;

fetch("json.json")

    .then((response) => response.json())
    .then((data) => {

        let kerdesekszama = data.kerdesek.length;
        let element = data.kerdesek[index];

        ponttext.innerHTML = kerdesekszama + "/" + kszam;

        kerdes.innerHTML = kszam + ". " + element.kerdes;

        lehetoseg1.innerHTML = element.valasz1;
        lehetoseg2.innerHTML = element.valasz2;
        lehetoseg3.innerHTML = element.valasz3;
 
        kerdeskep.src = element.kep;
        tipp.innerHTML = element.tipp;

        let pbwidth = 100/kerdesekszama;
        progressbar.style.width = pbwidth + "%";


        function quizKerdesek() {

            let element = data.kerdesek[index];
            
            kerdes.innerHTML = kszam + ". " + element.kerdes;
            lehetoseg1.innerHTML = element.valasz1;
            lehetoseg2.innerHTML = element.valasz2;
            lehetoseg3.innerHTML = element.valasz3;
            kerdeskep.src = element.kep;
            tipp.innerHTML = element.tipp;
        
        }

        backToMainPageButton.addEventListener("click", () => {

            window.location.href = "index.html";
        })
        
        
        nextbutton.addEventListener("click", () => {

            if (valasz1.checked) {
                selected = element.valasz1pontszam; 
            } else if (valasz2.checked) {
                selected = element.valasz2pontszam; 
            } else if (valasz3.checked) {
                selected = element.valasz3pontszam; 
            }
            
            pontszam += parseInt(selected); 
            console.log(pontszam);



            if (index < data.kerdesek.length) {
                index++;
                kszam++;
            }

            if (index == data.kerdesek.length) {
                quizGame.hidden = true;
                ponttext.hidden = true;
                quizprogressbar.hidden = true;

                if (pontszam >= 31) {
                    pontstring.textContent = "Ajjaj, nagy a baj. Nem figyelsz az étkezésedre. Ha ezen nem változtatsz, komoly egészségügyi következményei is lehetnek (mint a cukorbetegség, a magas vérnyomás vagy a korai csontritkulás).";
                }
                else if (pontszam >= 22 && pontszam <= 30) {
                    pontstring.textContent = "Jó úton jársz, de még van mit javítani az étkezéseden. Figyelj a rost és a megfelelő fehérje bevitelre (hal, pulyka vagy csirke legyen a fő és a hüvelyes zöldségek). Nézz utána a mediterrán étrendnek, a tested meg fogja hálálni. A nassolást, amennyire lehet, mellőzd. A nyugodt alváshoz pedig elengedhetetlen a jó környezet, a sötét szoba. Nyugi, nincs szörny az ágy alatt. ;)";
                } 
                else if(pontszam <= 21)
                {
                    pontstring.textContent = "Gratulálunk, te tudod, hogy kell igazán egészségesen élni. Ami nagyon fontos, hogy továbbra is figyelj oda a megfelelő hidratálásra és a rostbevitelre. Ha még nem próbáltad, akkor itt az ideje kipróbálni az alternatív fehérje megoldásokat is. Szuper egészséges és finom tud lenni. Egyre vigyázz, azért ne hajtsd túl magad. ;)";
                }

                backToMainPageButton.type = "button";
                backToMainPageButton.textContent = "Vissza a főoldalra";
                backToMainPageButton.classList.add("backButton");

                resultstring.appendChild(pontstring);
                quizdiv.appendChild(resultstring);
                quizdiv.appendChild(backToMainPageButton);

                resultstring.classList.add("resultcss");
            }

            quizKerdesek();
            element = data.kerdesek[index];
            ponttext.innerHTML = kerdesekszama + "/" + kszam;
            pbwidth += 100/kerdesekszama;
            progressbar.style.width = pbwidth + "%";
        });

    });