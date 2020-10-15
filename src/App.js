import React, { useEffect, useState } from "react";

import api from "./services/api";
import Personagens from "./components/Personagens";

import { FiTrash2 } from "react-icons/fi";

import * as s from "./style"

export default function App() {
  const [people, setPeople] = useState([]);
  const [valueSelect, setValueSelect] = useState("");

  useEffect(() => {
    try {
      api.get("people/").then(response => {
        setPeople(response.data.results);
      });
    } catch (err) {
      alert("Não foi possível listar os personagens, tente novamente." + err);
    }
  }, []);

  function handleDeletePerson(name) {
    setPeople(people.filter((person) => person.name !== name));
  }

  return (
    <s.Container >
      <s.Topo></s.Topo>
      <s.DivTopo>
      <h1>StarWar</h1>
      <s.DivExcluir>
        <select value={valueSelect}  
        onChange={e  =>  setValueSelect(e.target.value)}>  
        <option value="">Selecione um Personagem:</option>  
        {people.map(person => (
          <option
            key={person.name}
            value={person.name}
            >{person.name}</option>
    
        ))}
        </select>
        <s.ButtonTrashSelect
          type="button"
          onClick={() => handleDeletePerson(valueSelect)}
        >
          <FiTrash2 size={20} color="#a8a8b3" />
        </s.ButtonTrashSelect>

      </s.DivExcluir>
      </s.DivTopo>
      
      <s.List>
        {people.map(person => (
          <li key={person.name}>
            <Personagens name={person.name} color={person.eye_color} />
            <s.ButtonTrash
                  type="button"
                  onClick={() => handleDeletePerson(person.name)}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </s.ButtonTrash>
          </li>
        )).sort()}
      </s.List>
    </s.Container>
  );
}