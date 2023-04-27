import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { db } from 'config/firebaseConfig'
import { getImage } from "helpers/getImage";

// export const getTrustee = createAsyncThunk('trustee/fetchTrustee', async (_,) => {
//         const querySnapshot = await getDocs(collection(db, "trustee"));

//         let trusteeList: any = []
//         querySnapshot.forEach(async (doc: any) => {

//             const avatar = await getImage(`trustee/${doc.data().name}.jpg`)
//             const result = doc.data()
//             const trusteeItem = {...result, avatar}
//             console.log(trusteeList)

//             trusteeList.push(trusteeItem)
          
//         });
//         console.log(trusteeList)
//         return trusteeList
// })

export const getTrustee = createAsyncThunk('trustee/fetchTrustee', async (_,) => {
    const querySnapshot = await getDocs(collection(db, "trustee"));
    let trusteeList: any = []
  
    for (const doc of querySnapshot.docs) {
      const avatar = await getImage(`trustee/${doc.data().name}.jpg`)
      const result = doc.data()
      const trusteeItem = {...result, avatar}
  
      trusteeList.push(trusteeItem)
    };
  
    return trusteeList
  })