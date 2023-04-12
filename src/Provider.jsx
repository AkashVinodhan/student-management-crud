import { useEffect, useState } from "react";
import Context from "./Context";

export default function Provider(props) {
  const [students, setStudents] = useState([]);
  const fetchStudents = () => {
    fetch("https://64340404582420e231718e94.mockapi.io/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  };

  const createStudent = (data) => {
    fetch("https://64340404582420e231718e94.mockapi.io/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  const updateStudent = (id, data) => {
    fetch("https://64340404582420e231718e94.mockapi.io/students/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  const deleteStudent = (id) => {
    fetch("https://64340404582420e231718e94.mockapi.io/students/" + id, {
      method: "DELETE",
    }).then((res) => fetchStudents());
  };




  return (
    <Context.Provider
      value={{
        students,
        setStudents,
        fetchStudents,
        createStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
