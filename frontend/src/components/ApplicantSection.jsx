import React from "react";
function ApplicantSection(props) {

  return (
    <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={props.imagen} alt="Gloria" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{props.nombre} {props.apellido}</h2>
              <p className="bio-position">{props.idProfesion}</p>
            </div>
            <div className="box-actions">
              <button>
                <i className="bi bi-star" />
              </button>
              <button>
                <i className="bi bi-chat" />
              </button>
              <button>
                <i className="bi bi-envelope" />
              </button>
            </div>
          </div>
  );
}






export default ApplicantSection;