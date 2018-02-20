import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Removed ', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed ', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Added ', snapshot.key, snapshot.val());
// });

// Add expense data to database
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'February 2018',
//     amount: 79500,
//     createdAt: 6000000
// });

// database.ref('expenses').push({
//     description: 'Ford Escape',
//     note: 'March 2018',
//     amount: 27200,
//     createdAt: 6000000
// });

// database.ref('expenses').push({
//     description: 'Electric',
//     note: 'February 2018',
//     amount: 17500,
//     createdAt: 6000000
// });

// Read expenses
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// //

// database.ref('notes').push({
//     title: 'to do',
//     body: 'go for a run'
// });

// database.ref('notes').push({
//     title: 'courses',
//     body: 'Angular, React, Python'
// });

// database.ref('notes/lkdjflkjk').update({
//     body: 'Go buy food'
// });

// database.ref('notes/lkdjflkjk').remove();

// database.ref().set({
//     name: 'Lou Vuono',
//     age: 56,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Plumsteadville',
//         country: 'United States'
//     }
// }).then(() => {
// console.log('Data was saved');
// }).catch((e) => {
// console.log('Database request failed', e);
// });

// database.ref().set('This is my data');

// database.ref('age').set(57);
// database.ref('location/city').set('Pipersville');

// database.ref('attributes').set({
//     height: 69,
//     weight: 206
// }).then(() => {
//     console.log('attributes were added');
// }).catch((e) => {
//     console.log('error saving attributes: ', e);
// });
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('isSingle was removed');
//     })
//     .catch((e) => {
//         console.log('Remove of isSingle failed', e);
//     });

// database.ref('isSingle').set(null);  another way to remove

// database.ref()
//     .update({
//         name: 'John',
//         age: 32,
//         isSingle: null,
//         sport: 'Baseball',
//         'location/city': 'Boston'
//     });

// 

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//     const val = snapshot.val();
//     const name = snapshot.val().name;
//     const title = snapshot.val().job.title;
//     const company = snapshot.val().job.company;
//     //console.log(name, 'is a ', title, 'at ', company);
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);

// }, (e) => {
//     console.log('Error with data fetching ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(34);
// }, 3500);

// setTimeout(() => {
//     database.ref('job/title').set('Development Manager');
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// console.log('I made a request to change data');