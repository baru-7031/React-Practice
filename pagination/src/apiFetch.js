import React from 'react'

function apiFetch() {
  return (
    <div>apiFetch</div>
  )
}


const apiUrl = "https://pokeapi.co/api/v2/pokemon?query=html"


  async function getValue() {
    const response = await fetch(apiUrl)
    const data=await response.json();
    console.log(data);
  }

export default apiFetch