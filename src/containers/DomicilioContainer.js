import React, { useState } from 'react';
import Domicilio from '../pages/Domicilio';
import states from '../data/states.json';

const DomicilioContainer = () =>{
    const [ form, setForm ] = useState({cp:'', estado:'', municipio:''});

    const onChange = ({target}) =>{
        let cp = target.value;
        if( cp.length > 5 )
            return;
        setForm( { ...form, cp: cp} ); // key : value
        if( cp.length === 5 ){
            states.forEach(state => {
                if( state.cp === parseInt( cp, 10 ) ){
                    setForm({estado: state.estado, municipio: state.municipio, cp: cp });
                    console.log( state );
                }
            });
        }
    }

    return(
        <Domicilio
            onChange = { onChange }
            form = { form }
        />
    )
};

export default DomicilioContainer;