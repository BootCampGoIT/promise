// console.log('First');

// console.log("New");

// setTimeout(() => {
//     console.log('... inside setTimeout');
// }, 3000);

// console.log("Last")


// =============================== 1 =======================

// console.log('Can I get data from server? ...');

// setTimeout(() => {
//     console.log('Request getting from front.');

//     setTimeout(() => {
//         console.log('You can get data from server ...');
//     }, 1000);
// }, 3000);


// setTimeout(() => {
//     console.log('Request data from server ...'); //url //data about weather
// }, 10000);

// setTimeout(() => {
//     console.log('Prepearing data for front from dataBase...');

//     const data = {
//         weather: {
//             temperature: 30,
//             hum: 70,
//             wind: 10
//         }
//     }

//     setTimeout(() => {
//         data.properties = 'status 200 OK';
//         console.log('Data receiving ...', data);
//     }, 3000);

// }, 13000);


// ================================== 2 =============================================

// console.log('Request data from server ...'); //url //data about weather

// const result = [];


// //  imitation DB
// const gettingData = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('Prepearing data for front from dataBase...');
//         const data = {
//             weather: {
//                 temperature: 30,
//                 hum: 70,
//                 wind: 10
//             }
//         }
//         // const err = { message: 'Have no info about this product' }
//         resolve(data);
//         // reject(err)
//     }, 3000);
// })


// // imitation server
// // gettingData.then((data) => {
// //     const reciveData = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             data.properties = 'status 200 OK';
// //             resolve(data);
// //         }, 3000);
// //     })

// //     reciveData.then((data) => {
// //         console.log("data resolve", data)
// //     })
// // })

// // imitation server
// gettingData
//     .then(data => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.properties = 'status 400';
//                 reject('error')
//             }, 6000);
//         })
//     })
//     .then(targetData => {
//         return targetData.weather
//     })
//     .then(info => result.push(info))
//     .catch(err => console.error(err))
//     .finally(() => {
//         console.log("operation succes")
//     })




//  const result = fetch('https://fozzy.ua/products/milka/23456', { JSON, })
//     .then(targetData => {
//         return targetData.weather;
//     })
//     .then(info => { return info })
//     .catch (err => console.error(err))


const loading = document.querySelector('.loading');
const result = document.querySelector('.result');

const prom = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3]);
            // reject('error with status 400')
        }, ms);
    })
}

const user = [];

function getData() {
    loading.textContent = '...loading';
    prom(5000)
        .then((data) => { return data.length }) //3
        .then((length) => {
            user.push(length); //[3]
            result.textContent = length;
            return length * 2
        })
        .then((multi) => console.log(`Result: ${multi}`))
        .catch(err => console.error('err', err))
        .finally(() => { loading.textContent = '' });
}

getData();

// prom(5000).then(() => console.log('newInfo')).catch(err => console.error('err', err));

// Promise.all([prom(2000), prom(5000)]).then(() => console.log('all promises resolve')).catch(err => console.log(err));
// Promise.race([prom(2000), prom(5000)]).then(() => console.log('promise race')).catch(err => console.log(err));



// fetch('https://firebase.com/data.json').then(info => console.log('info', info)).catch(err => console.error('err', err))
// axios('https://firebase.com/data.json').then(info => console.log('info', info)).catch(err => console.error('err', err))