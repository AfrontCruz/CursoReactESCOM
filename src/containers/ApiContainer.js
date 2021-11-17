import React, { useEffect, useState } from 'react';
import Api from '../pages/Api';
import Request from '../async/request';

const ApiContainer = () =>{
    const [ perfiles, setPerfiles ] = useState([]);
    const [ nombre, setNombre ] = useState("");

    useEffect(
        () =>{
        },[]
    );    

    const onChange = ({ target }) =>{
        setNombre( target.value );
    }

    async function consumir(){
        console.log( "Consumiendo..." );
        let request = new Request("GET", null, false, `search/users?q=${nombre}+in:login`);
        let respose = await request.exec();
        console.log( respose );
        setPerfiles( respose.items );
    }
    
    return(
        <Api 
            perfiles = { perfiles }
            consumir = { consumir }
            onChange = { onChange }
            nombre = { nombre }
        />
    )
};

export default ApiContainer;