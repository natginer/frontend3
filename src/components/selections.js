import React from 'react'

export default class selections extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "recordatorio">
                <h2>Seleccion anterior: {this.props.seleccionPrevia} </h2>
                <h2>Historial de opciones elegidas: {this.props.historial} </h2>
            </div>
        )
    }
}