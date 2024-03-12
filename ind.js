const bmiSzoveg = document.getElementById("bmi");
const leirasSzoveg = document.getElementById("desc");
const form = document.querySelector("form");
const s = document.getElementById("weight").value;
const m = document.getElementById("height").value;


form.addEventListener("submit", Szamol);
form.addEventListener("reset", Torol);

function Torol(e) {
  e.preventDefault();
  bmiSzoveg.textContent = 0;
  bmiSzoveg.className = "";
  leirasSzoveg.textContent = "N/A";
}

function bmiErtekeles(bmi) {
  if (bmi < 18.5) {
    return "alultáplált";
  } else if (bmi < 25) {
    return "normális";
  } else if (bmi < 30) {
    return "túlsúlyos";
  } else {
    return "elhízott";
  }
}

function Szamol(e) {
  e.preventDefault();

  const suly = parseFloat(s);
  const magassag = parseFloat(m);

  if (isNaN(suly) || isNaN(magassag) || suly <= 0 || magassag <= 0) {
    alert("Kérlek, adj meg érvényes súlyt és magasságot");
    return;
  }

  const magassagMeterben = magassag / 100; // cm -> m
  const bmi = suly / Math.pow(magassagMeterben, 2);
  const leiras = bmiErtekeles(bmi);

  bmiSzoveg.textContent = bmi.toFixed(2);
  bmiSzoveg.className = leiras;
  leirasSzoveg.innerHTML = `Ön <strong>${leiras}</strong>`;
}
//-----
