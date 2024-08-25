document.getElementById('daha-fazla-bilgi-btn').addEventListener('click', function() {
    window.location.href = '#iklim-degisikligi';
});

const pollutionSlider = document.getElementById('pollution-slider');
const sliderYear = document.getElementById('slider-year');
const pollutionInfo = document.getElementById('pollution-info');
const pollutionImage = document.getElementById('pollution-image');

const yearData = [
    { year: "1985", image: "/static/images/1985.png", info: "1986 yılında dünyanın kirlilik durumu oldukça düşüktü..." },
    { year: "1995", image: "/static/images/1995.png", info: "1999 yılında dünyanın kirlilik durumu artmaya başladı..." },
    { year: "2010", image: "/static/images/2010.png", info: "2000 yılında kirlilik ciddi bir sorun haline geldi..." },
    { year: "2020", image: "/static/images/2020.png", info: "2012 yılında kirlilik seviyesi alarm verici bir düzeye ulaştı..." },
    { year: "2028", image: "/static/images/2028.png", info: "2015 yılında kirlilik seviyesi biraz azaldı ancak hala yüksek..." },
];



pollutionSlider.addEventListener('input', function() {
    const sliderValue = parseInt(this.value, 5);
    const data = yearData[sliderValue];

    sliderYear.textContent = data.year;
    pollutionImage.src = data.image;
    pollutionInfo.textContent = data.info;
});


document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Çevreyi Koruyun.",
        "Protect the Environment.",
        "Schützen Sie die Umwelt.",
        "Protégez l'environnement.",
        "Proteja o Meio Ambiente.",
        "Salva el Medio Ambiente."
    ];
    let currentIndex = 0;
    const heroText = document.getElementById("hero-text");
    let isDeleting = false;
    let charIndex = 0;

    function typeText() {
        const currentText = texts[currentIndex];
        const nextChar = currentText.slice(0, charIndex + 1);
        heroText.innerHTML = nextChar.replace(/(Çevreyi|Protect|Schützen|Protégez|Proteja|Salva)/, '<mark>$1</mark>') + '<span class="cursor">|</span>';

        if (!isDeleting) {
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeText, 2000); // Tam metin yazıldıktan sonra 2 saniye bekle
            } else {
                setTimeout(typeText, 100);
            }
        } else {
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % texts.length;
                setTimeout(typeText, 500); // Yeni metne başlamadan önce biraz bekle
            } else {
                setTimeout(typeText, 50);
            }
        }
    }

    typeText();
});

