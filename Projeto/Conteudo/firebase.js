// Cole a constante do firebase abaixo
const firebaseConfig = {
    apiKey: "AIzaSyATLngNgDmvfU_MDdWnbC_RkU3ILpWagHo",
    authDomain: "projeto-marcus.firebaseapp.com",
    projectId: "projeto-marcus",
    storageBucket: "projeto-marcus.appspot.com",
    messagingSenderId: "561627413180",
    appId: "1:561627413180:web:04fcb89c02c6087b482eb9"
};
//Iniciando o firebase
firebase.initializeApp(firebaseConfig)
var database = firebase.database()