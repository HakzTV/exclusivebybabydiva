  // // // src/firebase.js
  // // import { initializeApp } from "firebase/app";
  // // import { getAnalytics } from "firebase/analytics";
  // // import { getFirestore } from "firebase/firestore";
  // // import { getStorage } from "firebase/storage";
  // // import { collection, getDocs } from 'firebase/firestore';

  // // // Your web app's Firebase configuration
  // // const firebaseConfig = {
  // //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // //   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  // // };

  // // export const fetchProducts = async () => {
  // //   try {
  // //     const productsCollection = collection(db, 'products');
  // //     const productsSnapshot = await getDocs(productsCollection);
  // //     const productsList = productsSnapshot.docs.map(doc => ({
  // //       id: doc.id,  // Add the document ID to each product
  // //       ...doc.data()
  // //     }));
  // //     return productsList;
  // //   } catch (error) {
  // //     console.error('Error fetching products:', error);
  // //     return [];
  // //   }
  // // };
  // // // Initialize Firebase
  // // const app = initializeApp(firebaseConfig);
  // // const analytics = getAnalytics(app);
  // // const db = getFirestore(app);
  // // const storage = getStorage(app);

  // // export { db, storage , analytics};
  // import { initializeApp } from "firebase/app";
  // import { getAnalytics } from "firebase/analytics";
  // import { getFirestore, collection, getDocs } from "firebase/firestore";
  // import { getStorage } from "firebase/storage";
  // import { getAuth } from "firebase/auth";

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
  //   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  // };

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // const db = getFirestore(app);
  // const storage = getStorage(app);



  // export const fetchProducts = async () => {
  //   try {
  //     const productsCollection = collection(db, 'products');
  //     const productsSnapshot = await getDocs(productsCollection);
  //     const productsList = productsSnapshot.docs.map(doc => {
  //       const data = doc.data();
  //       return {
  //         id: data['product-id'], // Map 'product-id' to 'id'
  //         ...data
  //       };
  //     });
  //     return productsList;
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     return [];
  //   }
  // };
  // const auth = getAuth(app);
  // export { db, storage, analytics, auth };
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getFirestore, collection, getDocs } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
  import { getAuth } from "firebase/auth";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };
  
  let app, analytics, db, storage, auth;
  
  const areEnvVariablesPresent = () => {
    return Object.values(firebaseConfig).every(value => value !== undefined);
  };
  
  const initializeFirebase = () => {
    if (areEnvVariablesPresent()) {
      console.log('Firebase configuration is present. Initializing Firebase...');
      app = initializeApp(firebaseConfig);
      analytics = getAnalytics(app);
      db = getFirestore(app);
      storage = getStorage(app);
      auth = getAuth(app);
  
      console.log('Firebase initialized successfully.');
    } else {
      console.error('Missing Firebase configuration. Retrying...');
      setTimeout(initializeFirebase, 1000); // Retry after 1 second
    }
  };
  
  // Initialize Firebase with retry mechanism
  initializeFirebase();
  
  export const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: data['product-id'], // Map 'product-id' to 'id'
          ...data
        };
      });
      return productsList;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };
  
  export { db, storage, analytics, auth };
  