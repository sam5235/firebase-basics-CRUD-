import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import "./App.css";

function App() {
  const [newUser, setNewUser] = useState([]);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users"); 

  const createUser = async () =>{
    await addDoc(usersCollectionRef, {name : newUser.name, age : Number(newUser.age)})
  }

  const updateUser = async (id, age) => {
    const userDoc =  doc(db, "users", id);
    const newAge = {age : age + 1};
    await updateDoc(userDoc, newAge);
  }

  const deleteUser = async (id) => {
    const userDoc =  doc(db, "users", id);
    await deleteDoc(userDoc);

    
  }
  useEffect(() => {
    const getUsers = async () => {
      console.log("here");
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };

    getUsers();
  }, []);
  return (
    <div className="App">
      <input type="text" placeholder="name..." onChange={(e) => {
        setNewUser({...newUser, name : e.target.value})
      }}/>
      <input type="number" placeholder="age..." onChange={(e) => {
        setNewUser({...newUser, age : e.target.value})
      }}/>
      <button onClick={createUser}>Create user</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h3>Name : {user.name}</h3> <h3>Age : {user.age}</h3>
            <button onClick={ () =>{updateUser(user.id, user.age)}}>Increase age</button>
            <button onClick={() => {deleteUser(user.id)}}>Delete user</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
