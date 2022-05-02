/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const [mascotas, setMascotas] = useState([]);
  const [filteredMascotas, setFilteredMascotas] = useState([]);
  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (localUser) {
      const getUser = async () => {
        if (localUser) {
          const res = await axios.get(`https://luismrtinez.com/users/${localUser._id}`);
          setUser(res.data);
        }
      };

      getUser();
    }
  }, []);

  useEffect(() => {
    const getMascotas = async () => {
      const res = await axios.get("https://luismrtinez.com/mascotas");
      setMascotas(res.data);
      setFilteredMascotas(res.data);
    };

    getMascotas();
  }, []);

  const onFilter = (inputValue) => {
    let filteredMascota = filteredMascotas.filter((mascota) => {
      if (mascota.especie.toLowerCase().includes(inputValue.toLowerCase()) || mascota.nombre.toLowerCase().includes(inputValue.toLowerCase())) {
        return mascota;
      }
      return false;
    });
    setMascotas(filteredMascota);
  };

  const onSearch = (event) => {
    onFilter(event.target.value);
  };

  return <UserContext.Provider value={{ user, mascotas, filteredMascotas, setFilteredMascotas, setMascotas, onFilter, onSearch }}>{children}</UserContext.Provider>;
}
