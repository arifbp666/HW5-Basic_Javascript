// create students array
let arrStudents = [];

// function Student(firstname, lastname){

// }

class Student {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}

function openTab(evt, cityName) {
  showTableData();
  average();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

async function submitData(form) {
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let uang = document.getElementById("uang").value;

  if (nama.length < 10) {
    alert("Minimal 10 karakter");
    return;
  }

  if (umur < 25) {
    alert("Minimal 25 tahun");
    return;
  }

  if (uang < 100000 || uang > 1000000) {
    alert("Uang sangu minimal 100 ribu dan maksimal 1 juta");
    return;
  }

  let newStudent = await new Student(nama, umur, uang);
  await arrStudents.push({
    Nama: newStudent.nama,
    Umur: newStudent.umur,
    Uang: newStudent.uang,
  });
}

function showTableData() {
  //Tabel Pendaftar
  var outputHTML = "";

  outputHTML += "<table border='1px' width='600'>";

  outputHTML += "<tr><td> Nama </td> <td> Umur </td> <td> Uang </td></tr><hr>";

  console.log(arrStudents);

  for (let i = 0; i < arrStudents.length; i++) {
    outputHTML +=
      "<tr><td>" +
      arrStudents[i].Nama +
      "</td>" +
      "<td>" +
      arrStudents[i].Umur +
      "<td>" +
      arrStudents[i].Uang +
      "</td></tr>";
  }

  outputHTML += "</table>";

  document.getElementById("empTable").innerHTML = outputHTML;
}

let rataUmur = [];
let rataUang = [];

function average() {
  var outputAngka = "";

  outputAngka += "<table border='1px' width='600'>";

  outputAngka += "<tr><td> Rata-rata Umur </td> <td> Rata-rata Uang </td></tr>";

  let totalUmur = 0;
  let totalUang = 0;

  for (let i = 0; i < arrStudents.length; i++) {
    totalUmur += parseInt(arrStudents[i].Umur);
    totalUang += parseInt(arrStudents[i].Uang);
  }

  let averageUmur = totalUmur / arrStudents.length;
  let averageUang = totalUang / arrStudents.length;

  for (let i = 0; i < arrStudents.length; i++) {
    outputAngka +=
      "<tr><td>" + averageUmur + "</td>" + "<td>" + averageUang + "</td></tr>";
  }

  outputAngka += "</table>";

  document.getElementById("empTable2").innerHTML = outputAngka;
}



//  Rata-rata Uang
// function findAverageUang(arrStudents) {
// console.log(arrStudents.uang);
//   let avg = 0;
//   for (let i = 0; i < arrStudents.length; i++) {
//     avg += arrStudents[i].Uang;
//   }
//   avg = avg / arrStudents.length;
//   rataUang.push(avg);
//   return avg;
// }
