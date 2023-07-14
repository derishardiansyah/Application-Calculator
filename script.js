function inputNUmber(value) {
  // Ambil elemen input atau tampilan layar
  const display = document.getElementById('display');

  // Menghapus angka terakhir jika tombol DEL diklik
  if (value === 'del') {
    display.value = display.value.slice(0, -1);
    return;
  }

  // Mengatur ulang layar jika tombol RESET diklik
  if (value === '') {
    display.value = '';
    return;
  }

  if (value === 'result') {
    // Evaluate the expression entered in the display
    const result = eval(display.value);
    display.value = result;
    return;
  }

  // Mengupdate layar dengan menambahkan angka atau operator yang diklik
  display.value += value;

}

let toggleSwitch = document.getElementsByClassName('redButton')[0];
let body = document.getElementsByTagName('body')[0];
let headerName = document.getElementsByClassName('header-name')[0];
let headerTheme = document.getElementsByClassName('header-theme')[0];
let legendTextContainer = document.getElementsByClassName('header-legendTextContainer')[0];
let del_button = document.getElementsById('del');

function go_to_1() {
  toggleSwitch.classList.add('horizTranslate1');
  toggleSwitch.classList.remove('horizTranslate2');
  toggleSwitch.classList.remove('horizTranslate3');
  body.style.backgroundColor = "#4A5B7E";
  headerName.style.color = "#FFFFFF";
  headerTheme.style.color = "#FFFFFF";
  legendTextContainer.style.color = "#FFFFFF";
  del_button.style.backgroundColor= "#00000";
  document.getElementsByClassName('content-bawah').style.backgroundColor = "#4A5B7E"
  doStuff(1);
}

function go_to_2() {
  toggleSwitch.classList.add('horizTranslate2');
  toggleSwitch.classList.remove('horizTranslate3');
  toggleSwitch.classList.remove('horizTranslate1');
  body.style.backgroundColor = "#E5E5E5";
  headerName.style.color = "#222222";
  headerTheme.style.color = "#222222";
  legendTextContainer.style.color = "#222222";
  doStuff(2);
}

function go_to_3() {
  toggleSwitch.classList.add('horizTranslate3');
  toggleSwitch.classList.remove('horizTranslate2');
  toggleSwitch.classList.remove('horizTranslate1');
  body.style.backgroundColor = "#0B666A";
  headerName.style.color = "#E2D241";
  headerTheme.style.color = "#E2D241";
  legendTextContainer.style.color = "#E2D241";
  doStuff(3);
}





//   // Menambahkan angka atau operator ke layar
//   display.value += value;

// Contoh penggunaan fungsi
// Misalkan ada elemen input dengan id "display" untuk menampilkan hasil
// Anda dapat menambahkan elemen input tersebut di dalam tag <body> di HTML
