import { doc, getDoc } from "firebase/firestore";
import { db } from 'config/firebaseConfig'

export const init = async () => {
    const docRef = doc(db, "init", "init");
    const docSnap = await getDoc(docRef);
    let res = false

    if (docSnap.exists()) {
        res = docSnap.data().break
    } else {
        res = false
    }
    return res
}