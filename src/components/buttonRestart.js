import React from "react";

export default class buttonRestart extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillUnmount(){
     alert("Comenzaras una nueva historia :)")
     
    };


    render(){
        return(
            <div  className="opcion">
                <button type="submit" className="botones" onClick = {(e) => this.props.onClick()}>Volver a comenzar</button>
            </div>
        )
    }
}