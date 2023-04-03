/**
 * Ejemplo de componente de tipo calse que dispone de los 
 * metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log('Constructor: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WillMount: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DidMount: justo al acabar el montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
        //return true o false
        /**
         * Controlar si el componente debe o no actualizarse
         */
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: Justo despues de actualizarse')
    }
    
    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;

