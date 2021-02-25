import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import api from "./services/api";
import "./App.css";

function App() {
  const [calculateHours, setCalculateHours] = useState([]);

  // Obtem os dados calculados do back-end
  useEffect(() => {
    api.get("api/date").then((response) => {
      setCalculateHours(response.data);
      console.log(response.data);
    });
  }, []);

  async function handleAddHours() {
    const valueHourIn = document.getElementById("hourIn").value;
    const valueMinIn = document.getElementById("minIn").value;
    const valueHourOut = document.getElementById("hourOut").value;
    const valueMinOut = document.getElementById("minOut").value;

    // Tratativas de erros
    if ( valueHourIn === "" || valueMinIn === "" || valueHourOut === "" || valueMinOut === "" ) {
      return alert("Todos os campos são obrigatórios!");
    } else if (valueHourIn > 24 || valueHourOut > 24) {
      return alert("Hora de entrada ou saída não pode ser maior que 24hrs");
    } else if (valueHourIn < 0 || valueHourOut < 0) {
      return alert("Hora de entrada ou saída não pode ser menor que 00");
    } else if (valueMinIn < 0 || valueMinOut < 0) {
      return alert("Minuto de entrada ou saída não pode ser menor que 00");
    }

    // Envia os dados para o back-end
    const response = await api.post("api/date", {
  
      hourIn: valueHourIn,
      minIn: valueMinIn,

      hourOut: valueHourOut,
      minOut: valueMinOut,
    });
    //console.log(response.data);

    const project = response.data;

    //setCalculateHours([...calculateHours, project]);
    setCalculateHours([project]);
  }

  async function handleReset() {
    setCalculateHours([]);
    await api.post("projects", { del: true });
  }

  return (
    <>
      <Header title="Cálcular Horas" />

      <h4>Digite a Hora de entrada</h4>
      <label> Hora <input id="hourIn" type="number" min="0" max="23" name="HourIn" /></label>
      <label> Minuto <input id="minIn" type="number" min="0" max="59" name="MinIn" /></label>
      <h4>Digite a Hora de saída</h4>
      <label> Hora<input id="hourOut" type="number" min="0" max="23" name="HourOut" /></label>
      <label>Minuto<input id="minOut" type="number" min="0" max="59" name="MinOut" /> </label>

      <button type="button" onClick={handleAddHours}>
        Cálcular horas
      </button>
      <span> </span>
      <button type="button" onClick={handleReset}>
        Resetar horas
      </button>

      <h4>Resulatdo: </h4>

      <ul>
        <li key={calculateHours.id}>
          {calculateHours.valueHourDiurno}:{calculateHours.valueMinDiurno}
          {calculateHours.DiurnoResult}e {calculateHours.valueHourNoturno}:
          {calculateHours.valueMinNoturno} {calculateHours.NoturnoResult}
        </li>
      </ul>
    </>
  );
}
export default App;
