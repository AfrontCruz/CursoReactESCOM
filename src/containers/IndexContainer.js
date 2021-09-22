import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Index from '../pages/Index';

const IndexContainer = () =>{
    const history = useHistory();
    const [form, setForm] = useState({ email:'', pass:'' });

    const onChange = (e) => setForm({...form, [e.target.id] : e.target.value });

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log( form );
        history.push( "/welcome", {form: form } );
    }

    return(
        <Index form={form} onChange={onChange} onSubmit={onSubmit} />
    )
};

export default IndexContainer;