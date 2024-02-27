import React, { useEffect, useState, Component} from "react";
import RowTable from "./RowTable";

class Profession extends Component {
    constructor(){
        super()
        this.state = {
            professionList: [],
        }
    }
	componentDidMount(){
        fetch("http://localhost:3001/api/professions")
        .then(res => res.json())
        .then(profession =>{
            this.setState({professionList: profession.data})
            console.log(this.state.professionList)
        })
    }
    render() {
        return (
            <React.Fragment>
                {/*Sección de profesiones*/}
                <section className="content profesiones">
                    <h2 className="mt-3">Profesiones</h2>
                    <div className="list-group shadow-sm p-3 mb-5 rounded">
                        <h4
                            className="list-group-item list-group-item-action active text-center"
                            aria-current="true"
                        >
                            Listado de Profesiones
                        </h4>
                        {
										
                            this.state.professionList.map((prof,index)=>{
                                return  <RowTable  {...prof}  key={index} />
                                })
                        }
                        
                    </div>
                </section>
                {/*Fin sección profesiones*/}
            </React.Fragment>
        )
    }
}
export default Profession;