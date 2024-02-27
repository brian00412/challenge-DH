import React, { Component } from 'react';
import ApplicantSection from './ApplicantSection';
import foto2 from '../assets/img/foto2.jpg'
import foto3 from '../assets/img/foto3.jpg'
import foto4 from '../assets/img/foto4.jpg'
import foto5 from '../assets/img/foto5.jpg'

class Applicant extends Component{

  constructor(){
    super()
    this.state = {
        applicantList: [],
    }
    }
  componentDidMount(){
      fetch("http://localhost:3001/api/applicants")
      .then(res => res.json())
      .then(applicant =>{
          this.setState({applicantList: applicant.data})
          console.log(this.state.applicantList)
      })
  }
   render(){
    return(
    <React.Fragment>
        {/*Sección aspirantes*/}
        <section className="content aspirantes">
        <h2>Aspirantes</h2>
        <article className="person-boxes">
        {
										
                    this.state.applicantList.map((app,index)=>{
                        return  <ApplicantSection  {...app}  key={index} />
                        })
                }

          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={foto2} alt="Daniel Fuentes" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">Daniel Fuentes</h2>
              <p className="bio-position">Técnico de sonido</p>
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
          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={foto3} alt="Lee Chim" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">Tim Tim</h2>
              <p className="bio-position">Linguista</p>
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
          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={foto4} alt="Rocio" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">Rocio Carle</h2>
              <p className="bio-position">Profesor</p>
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
          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={foto5} alt="Vctor" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">Victor Fuentes</h2>
              <p className="bio-position">Computista</p>
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
          
        </article>
      </section>
      {/*Fin sección aspirantes*/}
      </React.Fragment>
    )}
}
export default Applicant;