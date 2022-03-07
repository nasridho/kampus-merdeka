function tambah() {
    let form1 = document.getElementById("formulir");
    let angka1 = form1.a1.value;
    let angka2 = form1.a2.value;
  
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Angka 1 diisi berupa angka/bilangan");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap form Angka 2 diisi berupa angka/bilangan");
    } else {
      let total = parseInt(angka1) + parseInt(angka2);
      form1.hasil.value = total;
    }
}

function kurang() {
    let form1 = document.getElementById("formulir");
    let angka1 = form1.a1.value;
    let angka2 = form1.a2.value;

    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Angka 1 diisi berupa angka/bilangan");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap form Angka 2 diisi berupa angka/bilangan");
    } else {
      let total = parseInt(angka1) - parseInt(angka2);
      form1.hasil.value = total;
    }
}

function kali() {
    let form1 = document.getElementById("formulir");
    let angka1 = form1.a1.value;
    let angka2 = form1.a2.value;

    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Angka 1 diisi berupa angka/bilangan");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap form Angka 2 diisi berupa angka/bilangan");
    } else {
      let total = parseInt(angka1) * parseInt(angka2);
      form1.hasil.value = total;
    }
}

function bagi() {
    let form1 = document.getElementById("formulir");
    let angka1 = form1.a1.value;
    let angka2 = form1.a2.value;
  
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Angka 1 diisi berupa angka/bilangan");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap form Angka 2 diisi berupa angka/bilangan");
    } else {
      let total = parseInt(angka1) / parseInt(angka2);
      form1.hasil.value = total;
    }
}

function pangkat() {
    let form1 = document.getElementById("formulir");
    let angka1 = form1.a1.value;
    let angka2 = form1.a2.value;
  
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap Angka 1 diisi berupa angka/bilangan");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap form Angka 2 diisi berupa angka/bilangan");
    } else {
      let total = parseInt(angka1) ** parseInt(angka2);
      form1.hasil.value = total;
    }
}

function kosong() {
    let form1 = document.getElementById("formulir");
    form1.a1.value = "";
    form1.a2.value = "";
    form1.hasil.value = "";
}

function angka1() {
    let form1 = document.getElementById("formulir");
    form1.a1.value = "";
}

function angka2() {
    let form1 = document.getElementById("formulir");
    form1.a2.value = "";
}