import React from 'react'
import data from './data'
import Buttons from './buttons'
import {dict} from './utils'
import Selections from './selections'
import ButtonRestart from './buttonRestart'


class Story extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            historial: [],
            contador: 0,
            seleccionPrevia: '',
        }

    }

    updateValues = (event) => {
        event.preventDefault();
        let value =  event.target.value
        let historial = this.state.historial
        let next
        let key
        if(historial.length === 0){
            key = value
            console.log(key)
            next = dict[key]
            console.log(next)

        }
        else{
            let size = historial.length
            key = historial[size - 1].concat('-', value)
            console.log(key)
            next = dict[key]
            console.log(next)

        }
        historial.push(value)
        let contador = this.state.contador + next
        console.log(contador)
        this.setState({
            seleccionPrevia : value,
            historial: historial,
            contador: contador
        })
    }


    sendAlert = () =>{
        alert("FIN!!")
    }


    restart = () =>{
        this.setState({
            historial: [],
            contador: 0,
            seleccionPrevia: '',
        })
    }




    render(){
        const fin = this.state.contador >= 7
        const hist = this.state.historial
        let h = hist.slice(0, (hist.length - 1))
        let asString
        if(h.length === 0){
            asString = ""
        }
        else{
            asString = h.join('-')
        }
        return(
        <div>
            { !fin ? (
                <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Buttons onClick={this.updateValues} opciones = {data[this.state.contador].opciones}/>
                <Selections seleccionPrevia = {this.state.seleccionPrevia} historial = {asString} />
                </div>
                ) : (
                <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Buttons onClick={this.sendAlert} opciones = {data[this.state.contador].opciones}/>
                <ButtonRestart onClick={this.restart} />
                <Selections seleccionPrevia = {this.state.seleccionPrevia} historial = {asString} />
                </div>
            )
            }
        </div>
        ) 
    }
}


export default Story