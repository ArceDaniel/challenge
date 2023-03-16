import firebaseApp from "./firebase";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

export async function sendForm(form) {
  const docuRef = doc(firestore, `challenge/${new Date().getTime()}`);
  setDoc(docuRef, {
    id: new Date().getTime(),
    form,
  });
  window.location.pathname = '/data'
}

export async function getAllForm(state) {
  const collectionRef = collection(firestore, `/challenge`);
  const forms = await getDocs(collectionRef);
  const data = forms.docs.map((form) => form.data());
  console.log(data);
  state(data);
}
