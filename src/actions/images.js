import { storage } from '../firebaseConfig';
import { uploadBytes, ref, getDownloadURL} from 'firebase/storage';

export const uploadFile = ({imageUpload, name, type}) => async(dispatch) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${type}/${name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
      alert("Uploaded Successfully")
    });
}