import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAclygwk891aiYqMAQdBgOd97ogOQcSAL8',
  authDomain: 'messenger-clone-c6586.firebaseapp.com',
  projectId: 'messenger-clone-c6586',
  storageBucket: 'messenger-clone-c6586.appspot.com',
  messagingSenderId: '665102388532',
  appId: '1:665102388532:web:7ae8504841dc416d1ca961',
};
const initfirebase = app.initializeApp(firebaseConfig);

export default initfirebase;
