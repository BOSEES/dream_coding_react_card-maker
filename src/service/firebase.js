  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY
    authDomain: process.env.REACT_APP_FIREBASE_AUTH
    databaseURL: process.env.REACT_APP_FIREBASE_URL
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();