import { useState, useEffect } from 'react';
import config from "../../config.json";

export function AList() {

  const [artiestData, setArtiestData] = useState([]);
  useEffect(() => { fetchArtiestData() }, []);

  async function fetchArtiestData() {
    const token = sessionStorage.getItem("token");
    const response = await fetch(config.ApiUrl+"/api/artiest", {
      method: "GET",
      headers: { "Authorization": "Bearer " + token},
    });
    const responseJSON = await response.json();
    setArtiestData(responseJSON);
  }

  return (
    <div>
      {
        artiestData.map(artiest => <div>{artiest.id} - {artiest.naam}</div>)
      }
    </div>)

}