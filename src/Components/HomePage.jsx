import React, {useState} from 'react'
import axios from 'axios'

const HomePage = () => {
  const [countries, setCountries] = useState([])


  const getCountries = () => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags')
    .then((response) => {
      setCountries(response.data)
    })
  }

  return (
    <div>
      <button onClick={getCountries}>Get Countries</button>

      <ul>
      {countries.map(c => {
        return (<li key={c.name.common} ><img src={c.flags.png}/>{c.name.common}</li>)
      })}
      </ul>

    </div>
    )
}

export default HomePage