import React from "react";

function Tarjeta(props) {
  return (
    <React.Fragment>
    <div className="card-deck">
      <div className="card">
        <img src="https://www.spirit-of-metal.com/les%20goupes/T/The%20Devil%20Wears%20Prada/pics/9a11_3.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Biografia</h5>
          <p className="card-text">The Devil Wears Prada (abreviado como TDWP) es una banda de metalcore de Dayton, Estados Unidos. Están firmados actualmente en Rise Records y son clasificados en PureVolume y Myspace como una banda de metalcore cristiano. Tomaron el nombre de la novela y película. La banda fue formada antes de salir la película del mismo nombre. Aunque la inspiración de la banda para su nombre era del libro, pero no el motivo. Según lo dicho por el vocalista Mike Hranica en el blog de la bandaa.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <button type="button" class="btn btn-danger" href="https://www.youtube.com/watch?v=HfiaUIYF4ds">Ver video de la banda</button>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src="https://www.spirit-of-metal.com/les%20goupes/T/The%20Devil%20Wears%20Prada/pics/9a11_3.jpg" className="card-img-top" alt="tdwp"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>

    <p> {props.cards}</p>
    </React.Fragment>
  )

}

export default Tarjeta;
