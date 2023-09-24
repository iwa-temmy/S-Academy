import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: 'AIzaSyAoUi1NdbG1NSGnwIcCjhnAm2N4N4TpDNc',
    authDomain: 'iqsa-71b45.firebaseapp.com',
    projectId: 'iqsa-71b45',
    storageBucket: 'iqsa-71b45.appspot.com',
    messagingSenderId: '784879192207',
    appId: '1:784879192207:web:4be6e7ace1b0cb95a388fa',
    measurementId: 'G-8Z03W6QVBP',
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
