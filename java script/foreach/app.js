// const angka =[1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });
// const angkaBaru = angka.filter((n) => {
//     return n < 5;
// });

// const examScore = [80, 85, 70, 90, 93, 77];
// let total = 0;
// for (let score of examScore) {
//     total += score;
// }

// const total = examScore.reduce((totsl, score) =>{
//     return total + score;
// })

// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 92,
//         year: 2013,
//     },
//     {
//         title: 'one piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2011,
//     },
//     {
//         title: 'naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const lowAnime = anime.reduce((LowAnime, currAnime) =>{
//     console.log(lowAnime,currAnime);
//     if (currAnime.rating < lowAnime.rating){
//         return currAnime;
//     }
// });

// const animeBagus = animes.filter(anime => anime.rating >= 85 );
// const judulAnimeBagus = animes.filter((anime) => anime.rating >= 85)
//     Map((anime) => anime.title);

// const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
// const animeBaru = animes.filter((anime) => anime.year > 2019);

// const animeList = animes.map(function(anime) {
//     return anime.title.toUpperCase
// })

// function perpangkatan(x) {
//     return x * x;
// }

// const hasil = perpangkatan(5)

// const hasil = function (x) {
//     return x * x;
// };

// const random = () => {
//     Math.floor(Math.random() * 1000)
// };

// const add = (a, b) => a + b

// console.log ('Halo...');
// setTimeout(() => {
//     console.log('masoh disana gak?');
// }, 5000);
// console.log('saya pergi ya..');


// const interval = setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function(){
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },
//     panggilNanti: function() {
//         setTimeout(function() {
//             console.log(this.fullName);
//         }, 3000);
//     }
// }


// function lemparDadu (sisi = 6) {
//     return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name, msg = 'selamat bekerja', name) {
//     console.log(`${name} ${msg}`);
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ['alex', 'Bimo', 'cici', 'delia', 'felix'];

// const campuran = [...nama, ...angka];


// const user = {
//     name: 'John',
//     email: 'john@doe.com',
// };

// const credential = {
//     password: 'password',
//     token: 'u123kdnfjhwmfkl'
// };

// const userBaru = {...user, credential};

// const sumAll = (... nums) => {
//     return nums.reduce((total, el) => total + el);
// };

// const nama = ['alex', 'Bimo', 'cici', 'delia', 'felix', 'gerard', 'huey'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`medali emas diraih: ${gold}`);
//     console.log(`medali silver diraih: ${silver}`);
//     console.log(`medali bronze diraih: ${bronze}`);
//     console.log(`peserta lainnya: ${sisa}`);

// };

// const [gold, silver, bronze,...peserta] = nama;

// const user = {
//         name: 'John',
//         email: 'john@doe.com',
//         role:'admin'
//     };

// // const {name:  nama, email, phone= '089123124'} = user;
// const userAndRole = ({name, role}) => {
//     return `${name} {role}`;
// };


const animes = [
        {
            title: 'Attack on titan',
            rating: 92,
            year: 2013,
        },
        {
            title: 'one piece',
            rating: 89,
            year: 1999,
        },
        {
            title: 'bleach',
            rating: 82,
            year: 2004,
        },
        {
            title: 'Hunter x Hunter',
            rating: 90,
            year: 2011,
        },
        {
            title: 'naruto',
            rating: 84,
            year: 2002,
        },
    ];

    const anime = animes.map(({title, year, rating}) => {
        return `${title} ${year}) rating ${rating}`;
    });