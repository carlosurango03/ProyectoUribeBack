import React from 'react';
import './Formulario.css';

class Formulario extends React.Component {
  render() {
    return (
      <form action="#" method="POST" className="formulario">
        <h2>Formulario de Registro</h2>
        <div className="grupo">
          <input type="text" id="usuario" name="usuario" required />
          <label htmlFor="usuario">Usuario</label>
        </div>
        <div className="grupo">
          <input type="email" id="correoElectronico" name="correoElectronico" required />
          <label htmlFor="correoElectronico">Correo Electrónico</label>
        </div>
        <div className="grupo">
          <input type="text" id="nit" name="nit" required />
          <label htmlFor="nit">NIT</label>
        </div>
        <div className="grupo">
          <input type="number" id="estrato" name="estrato" required />
          <label htmlFor="estrato">Estrato social</label>
        </div>
        <div className="grupo">
          <input type="tel" id="celular" name="celular" required />
          <label htmlFor="celular">Celular</label>
        </div>
        <div className="grupo">
          <input type="text" id="residencia" name="residencia" required />
          <label htmlFor="residencia">Residencia</label>
        </div>
        <div className="grupo">
          <input type="text" id="departamento" name="departamento" required />
          <label htmlFor="departamento">Departamento</label>
        </div>
        <div className="grupo">
          <input type="text" id="ciudad" name="ciudad" required />
          <label htmlFor="ciudad">Ciudad</label>
        </div>
        <div className="grupo">
          <input type="file" id="foto" name="foto" accept="image/*" required />
          <label htmlFor="foto">Foto de Perfil</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Formulario;
