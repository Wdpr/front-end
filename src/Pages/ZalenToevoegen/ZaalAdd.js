import { useState } from 'react';
import '../../Styles/StoelenStyle.css';
import config from "../../config.json";

export function VoegZaalToe() {
  const [eersterng, setEersterng] = useState(0);
  const [tweederng, setTweederng] = useState(0);
  const [derderng, setDerderng] = useState(0);

  async function submitHandler(e) {
    e.preventDefault();
    fetch(config.ApiUrl + "/api/zaal/nieuweZaal", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + sessionStorage.getItem("token") },
      body: JSON.stringify({
        AantalEersteRang: eersterng,
        AantalTweedeRang: tweederng,
        AantalDerdeRang: derderng,
      })
    }).then(response => {
      console.log(response)
      response.ok ? alert("Zaal succesvol toegevoegd") : alert("fout")
    })
  }

  function berekenAantalRijenPerCategorie(aantalStoelen, rangnr) {
    function maakLijst(aantalStoelenPerRij) {
      let array = []
      for (let i = 0; i < aantalStoelen / aantalStoelenPerRij; i++) {
        let row = [];
        for (let j = 0; j < aantalStoelenPerRij; j++) {
          row.push(rangnr);
        }
        array.push(row);
      }
      return array
    }

    if (aantalStoelen === 0) {
      return 0
    }
    if (aantalStoelen < 20) {
      return maakLijst(5)
    }
    if (aantalStoelen < 80) {
      return maakLijst(10)
    }
    return maakLijst(20)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='container'>
        <h1>Voeg Zaal Toe</h1>
        <div className='input-eersterang-div'>
          <input type="text" id="eersterang" onChange={(e) => setEersterng(e.target.value)} className="input-firstclass" placeholder="aantal eersterangs"></input>
        </div>
        <div className='input-tweederang-div'>
          <input type="text" id="tweederang" onChange={(e) => setTweederng(e.target.value)} className="input-secondclass" placeholder="aantal tweederangs"></input>
        </div>
        <div className='input-derderang-div'>
          <input type="text" id="derderang" onChange={(e) => setDerderng(e.target.value)} className="input-firstclass" placeholder="aantal eersterangs"></input>
          <div className='button-div-zaal'>
            <button className='submit-zaal-button' type='submit'>Add</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default VoegZaalToe;