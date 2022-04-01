import React from 'react'

export default class buttons extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="opciones">
                <div className="opcion">
                    <button value = "A" type="submit" onClick = {(e) => this.props.onClick(e)} className="botones">A</button>
                    <h2>{this.props.opciones.a}</h2>
            </div>
                <div className="opcion">
                    <button value = "B" type = "submit" onClick = {(e) => this.props.onClick(e)} className="botones">B</button>
                    <h2>{this.props.opciones.b}</h2>
            </div>
            </div>
        )
    }
}