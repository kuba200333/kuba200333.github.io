// config.js - Główna baza danych dla symulacji JS

const partyConfig = {
    'KO': { name: 'Koalicja Obywatelska', color: '227, 125, 0', axis: 2, parent: 'KO', logo: 'logos/KO.png' },
    'PiS': { name: 'Prawo i Sprawiedliwość', color: '38, 52, 140', axis: 6, parent: 'PiS', logo: 'logos/PiS.png' },
    'Kon': { name: 'Konfederacja', color: '18, 47, 71', axis: 4, parent: 'Konfederacja', logo: 'logos/Konfederacja.png' },
    'Bra': { name: 'Konfederacja Korony Polskiej', color: '92, 60, 24', axis: 5, parent: 'Konfederacja', logo: 'logos/braun.png' },
    'Lew': { name: 'Nowa Lewica', color: '200, 16, 46', axis: 1, parent: 'Lewica', logo: 'logos/Lewica.png' },
    'PSL': { name: 'PSL', color: '27, 177, 0', axis: 3, parent: 'TD', logo: 'logos/PSL.png' },
    'Raz': { name: 'Razem', color: '135, 15, 87', axis: 1, parent: 'Lewica', logo: 'logos/Razem.png' },
    'PL2050': { name: 'Polska 2050', color: '240, 232, 0', axis: 3, parent: 'TD', logo: 'logos/pl2050.png' },
    //'Rozwój Plus': { name: 'Rozwój Plus', color: '0, 160, 150', axis: 3, parent: 'PiS', logo: 'logos/Rozwój_Plus.jpg' },
    'Inna': { name: 'Bezpartyjni / Inni', color: '153, 153, 153', axis: 4, parent: null, logo: 'logos/inna.png' }
};

const baseline = {'PiS':35.38, 'KO':30.70, 'TD':14.40, 'Lewica':8.61, 'Konfederacja':7.16};

const districts = [
    {seats: 12, results: {'PiS':34.8, 'KO':33.78, 'TD':10.75, 'Lewica':9.51, 'Konfederacja':6.33}, name: 'Legnica'},
    {seats: 8, results: {'PiS':33.34, 'KO':37.17, 'TD':12.13, 'Lewica':7.98, 'Konfederacja':6.02}, name: 'Wałbrzych'},
    {seats: 14, results: {'PiS':26.66, 'KO':36.94, 'TD':13.74, 'Lewica':11.35, 'Konfederacja':6.98}, name: 'Wrocław'},
    {seats: 12, results: {'PiS':30.45, 'KO':35.01, 'TD':15.06, 'Lewica':9.92, 'Konfederacja':6.42}, name: 'Bydgoszcz'},
    {seats: 13, results: {'PiS':34.06, 'KO':29.52, 'TD':15.68, 'Lewica':11.25, 'Konfederacja':6.37}, name: 'Toruń'},
    {seats: 15, results: {'PiS':45.48, 'KO':20.32, 'TD':15.87, 'Lewica':5.72, 'Konfederacja':8.38}, name: 'Lublin'},
    {seats: 12, results: {'PiS':50.75, 'KO':17.4, 'TD':13.04, 'Lewica':5.62, 'Konfederacja':7.79}, name: 'Chełm'},
    {seats: 12, results: {'PiS':27.76, 'KO':37.73, 'TD':15.07, 'Lewica':9.27, 'Konfederacja':6.51}, name: 'Zielona Góra'},
    {seats: 10, results: {'PiS':26.82, 'KO':41.07, 'TD':11.89, 'Lewica':12.22, 'Konfederacja':5.57}, name: 'Łódź'},
    {seats: 9, results: {'PiS':46.6, 'KO':21.69, 'TD':13.73, 'Lewica':6.39, 'Konfederacja':7.62}, name: 'Piotrków Tryb.'},
    {seats: 12, results: {'PiS':41.46, 'KO':25.89, 'TD':14.5, 'Lewica':7.73, 'Konfederacja':6.82}, name: 'Sieradz'},
    {seats: 8, results: {'PiS':42.86, 'KO':24.24, 'TD':14.97, 'Lewica':6.04, 'Konfederacja':7.88}, name: 'Kraków I'},
    {seats: 14, results: {'PiS':30.68, 'KO':30.73, 'TD':16.86, 'Lewica':11.04, 'Konfederacja':7.71}, name: 'Kraków II'},
    {seats: 10, results: {'PiS':53.73, 'KO':16.1, 'TD':11.58, 'Lewica':3.18, 'Konfederacja':8.73}, name: 'Nowy Sącz'},
    {seats: 9, results: {'PiS':48.67, 'KO':17.02, 'TD':18.64, 'Lewica':4.0, 'Konfederacja':7.99}, name: 'Tarnów'},
    {seats: 10, results: {'PiS':44.11, 'KO':22.4, 'TD':17.07, 'Lewica':6.52, 'Konfederacja':6.52}, name: 'Płock'},
    {seats: 9, results: {'PiS':48.68, 'KO':20.96, 'TD':13.98, 'Lewica':5.34, 'Konfederacja':7.31}, name: 'Radom'},
    {seats: 12, results: {'PiS':48.62, 'KO':18.71, 'TD':15.51, 'Lewica':4.85, 'Konfederacja':8.21}, name: 'Siedlce'},
    {seats: 20, results: {'PiS':20.14, 'KO':43.23, 'TD':13.25, 'Lewica':13.45, 'Konfederacja':7.24}, name: 'Warszawa I'},
    {seats: 12, results: {'PiS':31.74, 'KO':35.23, 'TD':15.06, 'Lewica':7.06, 'Konfederacja':7.06}, name: 'Warszawa II'},
    {seats: 12, results: {'PiS':31.26, 'KO':33.59, 'TD':12.74, 'Lewica':7.24, 'Konfederacja':6.49}, name: 'Opole'},
    {seats: 11, results: {'PiS':54.7, 'KO':15.85, 'TD':13.79, 'Lewica':4.47, 'Konfederacja':8.62}, name: 'Krosno'},
    {seats: 15, results: {'PiS':51.6, 'KO':17.7, 'TD':12.42, 'Lewica':4.87, 'Konfederacja':9.48}, name: 'Rzeszów'},
    {seats: 14, results: {'PiS':42.39, 'KO':20.84, 'TD':18.86, 'Lewica':4.84, 'Konfederacja':9.79}, name: 'Białystok'},
    {seats: 12, results: {'PiS':25.2, 'KO':41.7, 'TD':14.7, 'Lewica':9.41, 'Konfederacja':6.23}, name: 'Gdańsk'},
    {seats: 14, results: {'PiS':29.24, 'KO':37.91, 'TD':13.59, 'Lewica':8.33, 'Konfederacja':7.21}, name: 'Gdynia'},
    {seats: 9, results: {'PiS':36.71, 'KO':28.67, 'TD':14.55, 'Lewica':7.77, 'Konfederacja':7.84}, name: 'Bielsko-Biała'},
    {seats: 7, results: {'PiS':36.35, 'KO':29.11, 'TD':14.72, 'Lewica':9.41, 'Konfederacja':6.56}, name: 'Częstochowa'},
    {seats: 9, results: {'PiS':30.16, 'KO':36.06, 'TD':13.34, 'Lewica':9.21, 'Konfederacja':6.95}, name: 'Gliwice'},
    {seats: 9, results: {'PiS':38.06, 'KO':29.98, 'TD':12.45, 'Lewica':6.84, 'Konfederacja':8.0}, name: 'Rybnik'},
    {seats: 12, results: {'PiS':30.88, 'KO':36.79, 'TD':13.27, 'Lewica':8.46, 'Konfederacja':6.7}, name: 'Katowice'},
    {seats: 9, results: {'PiS':29.74, 'KO':30.3, 'TD':9.85, 'Lewica':21.6, 'Konfederacja':5.69}, name: 'Sosnowiec'},
    {seats: 16, results: {'PiS':47.07, 'KO':20.93, 'TD':13.8, 'Lewica':6.83, 'Konfederacja':6.55}, name: 'Kielce'},
    {seats: 8, results: {'PiS':35.2, 'KO':31.87, 'TD':15.4, 'Lewica':8.11, 'Konfederacja':6.54}, name: 'Elbląg'},
    {seats: 10, results: {'PiS':32.33, 'KO':33.07, 'TD':16.11, 'Lewica':8.09, 'Konfederacja':6.93}, name: 'Olsztyn'},
    {seats: 12, results: {'PiS':35.85, 'KO':28.58, 'TD':16.16, 'Lewica':8.52, 'Konfederacja':6.98}, name: 'Kalisz'},
    {seats: 9, results: {'PiS':38.69, 'KO':23.99, 'TD':16.63, 'Lewica':9.48, 'Konfederacja':6.97}, name: 'Konin'},
    {seats: 9, results: {'PiS':29.11, 'KO':34.87, 'TD':17.66, 'Lewica':7.84, 'Konfederacja':6.87}, name: 'Piła'},
    {seats: 10, results: {'PiS':19.57, 'KO':44.09, 'TD':16.54, 'Lewica':12.31, 'Konfederacja':5.9}, name: 'Poznań'},
    {seats: 8, results: {'PiS':31.36, 'KO':38.69, 'TD':12.35, 'Lewica':8.72, 'Konfederacja':6.02}, name: 'Koszalin'},
    {seats: 12, results: {'PiS':28.79, 'KO':40.13, 'TD':12.62, 'Lewica':9.39, 'Konfederacja':5.94}, name: 'Szczecin'}
];

// Konfiguracja przycisków wariantów startu (scenariuszy)
const scenarios = {
    'osobno': { 
        name: 'Start osobny', 
        blocks: {}, 
        retention: {} 
    },
    'blok1': { 
        name: 'Wielka Koalicja (KO+Lew+PSL+Raz+PL2050)',
        blocks: { 'KO': 'Koalicja', 'Lew': 'Koalicja', 'PSL': 'Koalicja', 'Raz': 'Koalicja', 'PL2050': 'Koalicja' },
        retention: { 'Koalicja': 0.93 }
    },
    'blok2': { 
        name: 'Koalicja bez Razem',
        blocks: { 'KO': 'Koalicja', 'Lew': 'Koalicja', 'PSL': 'Koalicja', 'PL2050': 'Koalicja' },
        retention: { 'Koalicja': 0.95 }
    },
    'blok3': { 
        name: 'KO + PSL',
        blocks: { 'KO': 'KO+PSL', 'PSL': 'KO+PSL' }, 
        retention: { 'KO+PSL': 0.95 } 
    },
    'blok4': { 
        name: 'KO + Lewica',
        blocks: { 'KO': 'KO+Lew', 'Lew': 'KO+Lew' }, 
        retention: { 'KO+Lew': 0.97 } 
    },
    'blok5': { 
        name: 'Zjednoczona Prawica (PiS+Konf+Bra)',
        //blocks: { 'PiS': 'Prawica', 'Kon': 'Prawica', 'Bra': 'Prawica', 'Rozwój Plus': 'Prawica' }, 
        blocks: { 'PiS': 'Prawica', 'Kon': 'Prawica', 'Bra': 'Prawica'}, 
        retention: { 'Prawica': 0.92 } 
    },
    'blok6': { 
        name: 'Konfederacja + KKP',
        blocks: { 'Kon': 'Konf+KKP', 'Bra': 'Konf+KKP' }, 
        retention: { 'Konf+KKP': 1.0 } 
    },
    'blok7': { 
        name: 'Polaryzacja: Koalicja 15X vs Zjednoczona Prawica',
        blocks: { 
            'KO': 'Koalicja 15X', 'Lew': 'Koalicja 15X', 'PSL': 'Koalicja 15X', 'PL2050': 'Koalicja 15X', 
            'PiS': 'Prawica', 'Kon': 'Prawica', 'Bra': 'Prawica' 
        },
        retention: { 'Koalicja 15X': 0.95, 'Prawica': 0.92 }
    }
};