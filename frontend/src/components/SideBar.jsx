import React from 'react';
import MenuSelection from './MenuSelection';
import Applicant from './Applicant';
import Profession from './Profession';
function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            {/*Dashboard*/}
            <div className="dashboard">
                {/*Sección de acceso*/}
                <section className="search-wrap">
                    <div className="search">
                        <label htmlFor="search">
                            <i
                                className="bi bi-search"
                                style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                            />
                            <input type="text" id="search" />
                        </label>
                    </div>
                    <div className="user-actions">
                        <button>
                            <a href="#">
                                <i
                                    className="bi bi-person-add"
                                    style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                                />
                            </a>
                        </button>
                        <button>
                            <a href="#">
                                <i
                                    className="bi bi-person"
                                    style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                                />
                            </a>
                        </button>
                        <button>
                            <a href="#">
                                <i
                                    className="bi bi-box-arrow-right"
                                    style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                                />
                            </a>
                        </button>
                    </div>
                </section>
                {/*Fin Sección de acceso*/}
                <MenuSelection />
                {/*Sección contenido*/}
                <main className="content-wrap">
                    {/*Preventa*/}
                    <header className="preventa">
                        <h2>Búsqueda y selección</h2>
                        <p className="text-center h5">
                            Encontramos talento para tu empresa, en todos los cargos
                            administrativos, profesionales y técnicos.
                        </p>
                        <div>
                            <img src="./assets/img/banner.jpg" alt="Rcursos Humanos" />
                        </div>
                        {/*Fin Encabezado*/}
                    </header>
                    {/*Fin Preventa*/}
                    <Applicant/>
                    <Profession/>
                </main>
                {/*Fin Sección contenido*/}
            </div>
            {/*Fin Dashboard*/}
        </React.Fragment>
    )
}
export default SideBar;