import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const DetailCollectionRef = collection(db, "Details");
class DetailDataService {
  addDetails = (newDetail) => {
    return addDoc(DetailCollectionRef, newDetail);
  };

  updateDetail = (id, updatedDetail) => {
    const DetailDoc = doc(db, "Details", id);
    return updateDoc(DetailDoc, updatedDetail);
  };

  deleteDetail = (id) => {
    const DetailDoc = doc(db, "Details", id);
    return deleteDoc(DetailDoc);
  };

  getAllDetails = () => {
    return getDocs(DetailCollectionRef);
  };

  getDetail = (id) => {
    const DetailDoc = doc(db, "Details", id);
    return getDoc(DetailDoc);
  };
}

export default new DetailDataService();
