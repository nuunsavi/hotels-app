import React from 'react'
import { useNavigate } from 'react-router-dom'

const FormularioTradicional = () => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData.entries())
    console.log('Formulario enviado:', payload)
  }

  return (
    <div className="formPage">
      <div className="formHeader">
        <div className="formTitle">Reserva tradicional</div>
        <p className="formSubtitle">Completa los datos y envía el formulario.</p>
      </div>
      <form className="traditionalForm" onSubmit={onSubmit}>
        <div className="formRow">
          <label className="formLabel" htmlFor="nombre">
            Nombre completo
          </label>
          <input className="formInput" id="nombre" name="nombre" type="text" required />
        </div>
        <div className="formRow">
          <label className="formLabel" htmlFor="email">
            Correo electrónico
          </label>
          <input className="formInput" id="email" name="email" type="email" required />
        </div>
        <div className="formRow">
          <label className="formLabel" htmlFor="telefono">
            Teléfono
          </label>
          <input className="formInput" id="telefono" name="telefono" type="tel" />
        </div>
        <div className="formRow">
          <label className="formLabel" htmlFor="tipoHabitacion">
            Tipo de habitación
          </label>
          <select className="formSelect" id="tipoHabitacion" name="tipoHabitacion" defaultValue="estandar">
            <option value="estandar">Estándar</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="formRow split">
          <div>
            <label className="formLabel" htmlFor="checkin">
              Check-in
            </label>
            <input className="formInput" id="checkin" name="checkin" type="date" required />
          </div>
          <div>
            <label className="formLabel" htmlFor="checkout">
              Check-out
            </label>
            <input className="formInput" id="checkout" name="checkout" type="date" required />
          </div>
        </div>
        <div className="formRow">
          <label className="formLabel" htmlFor="comentarios">
            Comentarios
          </label>
          <textarea className="formTextarea" id="comentarios" name="comentarios" rows="4" />
        </div>
        <div className="formActions">
          <button className="primaryButton" type="submit">
            Enviar formulario
          </button>
          <button className="ghostButton" type="button" onClick={() => navigate('/')}>
            Volver al inicio
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioTradicional
