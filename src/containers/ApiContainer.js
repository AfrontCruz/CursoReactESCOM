import React, { useState } from 'react';
import Api from '../pages/Api';
import Request from '../async/request';

const ApiContainer = () =>{
    const [ perfiles, setPerfiles ] = useState([]);
    const consumir = async () =>{
        console.log( "Consumiendo..." );
        let request = new Request("GET", null, false, "search/users?q=luis+in:login");
        // cambiar luis por un input que creen
        let respose = await request.exec();
        console.log( respose );
        setPerfiles( respose.items );
    }

    return(
        <Api 
            perfiles = { perfiles }
            consumir = { consumir }
        />
    )
};

export default ApiContainer;