import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  useEffect(()=>{
    api
    .get("/name/Anderson")
    .then((response) => setUser(response.data))
    .catch((err) =>{
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  useEffect(()=>{
    api
    .post("https://localhost:3000/",{
            name: "Anderson",
            nivel: "2",
            email: "lombanderson@gmail.com",
            github: "lombanderson"
  })
    .then((response) => setUser(response.data))
    .catch((err) =>{
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  return (
    <div className="App">
      <p>Name: {user?.name}</p>
      <p>Level: {user?.level}</p>
      <p>Email: {user?.email}</p>
      <p>Github: {user?.github}</p>

    </div>
  );
}