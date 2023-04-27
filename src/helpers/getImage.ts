import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from 'config/firebaseConfig'


export const getImage = async (path:string) => {
    try {
        const wishesRef = ref(storage, path)
        const avatarRef = await getDownloadURL(wishesRef) 
        return avatarRef
    }
    catch (error) {
        return null
    }
}