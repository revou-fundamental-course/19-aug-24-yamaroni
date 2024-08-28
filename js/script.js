// Ini Javascript

function formValidation() {
    // Ini cara ambil DOM
    let name = document.getElementById('name').value;
    // Ini Kondisi pemisahnya
    if (name == '') {
        alert('Formnya kosong');
        // Ini Kondisi jika Formnya kosong
        document.getElementById('result').innerHTML = '-';
    } else {
        // Ini Kondisi jika Formnya Diisi
        document.getElementById('result').innerHTML = name;
    }
    console.log(name);
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    console.log('indexBanner:' + indexBanner);
    console.log('listImage:' + listImage.length);
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(listImage);
}