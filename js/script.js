let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1,  .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p,  .about-content', { origin: 'right' })

var strings = [
    'Halo, saya adalah seorang data enthusiast dengan minat yang kuat dalam bidang data science dan data analysis. Ketertarikan saya pada dunia data bermula dari studi independen yang saya lakukan di luar perkuliahan, melalui berbagai sumber belajar seperti kursus online, video tutorial, dan eksplorasi mandiri. Dari sana, saya mulai memahami bagaimana data dapat diolah menjadi informasi yang bernilai untuk pengambilan keputusan.',
    'Untuk memperluas wawasan dan pengalaman, saya mengikuti berbagai kompetisi data yang menantang kemampuan saya dalam membersihkan, menganalisis, dan memvisualisasikan data secara efektif. Setiap kompetisi menjadi ajang pembelajaran dan penguatan keterampilan teknis saya, termasuk dalam pengolahan data besar dan pembuatan model prediktif.',
    'Puncak perjalanan akademik saya adalah ketika saya mengangkat topik terkait forecasting saham dalam tugas akhir. Dalam penelitian tersebut, saya mengintegrasikan data historis harga saham dengan analisis sentimen dari berita keuangan untuk meningkatkan akurasi prediksi harga saham menggunakan pendekatan deep learning. Pendekatan ini membuka wawasan saya tentang bagaimana kombinasi antara data kuantitatif dan kualitatif dapat memberikan insight yang lebih holistik dan berdampak dalam dunia keuangan.'
];

var currentIndex = 0;
var paragraphElement = document.getElementById('paragraph');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'Data Analyst', 'AI Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

var ptype = new Typed('#paragraph', {
    strings: [strings[currentIndex]],
    typeSpeed: 0.001,
    backSpeed: 0.02,
    loop: false,
    showCursor: false,
    onComplete: function() {
        showNavigationButtons();
    }
});

function showNavigationButtons() {
    if (currentIndex > 0) {
        prevButton.style.display = 'inline';
    }

    if (currentIndex < strings.length - 1) {
        nextButton.style.display = 'inline';
    }
}

function prevParagraph() {
    if (currentIndex === 0) {
        return;
    }

    currentIndex--;
    ptype.reset();
    ptype.strings = [strings[currentIndex]];
    ptype.start();

    nextButton.style.display = 'inline';
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    }
}

function nextParagraph() {
    if (currentIndex === strings.length - 1) {

        return;
    }

    currentIndex++;
    ptype.reset();
    ptype.strings = [strings[currentIndex]];
    ptype.start();

    prevButton.style.display = 'inline';
    if (currentIndex === strings.length - 1) {
        nextButton.style.display = 'none';
    }
}


function checkForm() {
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var submitButton = document.getElementById("submit");

    if (fullName && email && mobileNumber && subject && message) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function SendMail() {
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('number').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var btn = document.getElementById('submit');

    var params = {
        from_name: fullName,
        email_id: email,
        message: message,
        subject: subject,
        number: mobileNumber
    };

    if (fullName && email && mobileNumber && subject && message) {
        emailjs.send("service_m1jkmdv", "template_w5xojmm", params).then(function(res) {
            alert("Email berhasil dikirim!");
        });
    } else {
        btn.disabled;
    }
}

startTyping(false);
