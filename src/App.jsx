import { useState } from "react"


export default function App() {
  const[valor1, setValor1] = useState(0)
  const[valor2, setValor2] = useState(0)
  const[resultado, setResultado] = useState(0)
  const[tResta, tSetResta] = useState(0)

  const operacion = (e) =>{
    e.preventDefault()
    setResultado(Number(valor1) + Number(valor2))
    tSetResta(Number(valor1) - Number(valor2))
  }

  return (  
    <div>
      <form>
          <input 
          type="text"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          placeholder="Numero 1"
          />

          <input 
          type="text"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          placeholder="Numero 2"
          />

          <button
          onClick={operacion}
          >
            Operaciones
          </button>
      </form>
      <p>Total: {resultado}</p>
      <p>Resta: {tResta}</p>
    </div>
  )
}