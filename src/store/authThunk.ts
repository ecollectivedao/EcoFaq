import {createAsyncThunk} from '@reduxjs/toolkit'
import {db} from 'config/firebaseConfig'
import {doc, getDoc} from 'firebase/firestore'

export const authThunk = createAsyncThunk('discord/roles', async () => {
    const docRef = doc(db, "discord", "discord-roles");
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    for (let key in docSnap.data()) {
        console.log(key)
    }
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
})
