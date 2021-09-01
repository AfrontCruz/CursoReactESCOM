import React, { useState } from 'react';
import Index from '../pages/Index';

const IndexContainer = () =>{
    const [form, setForm] = useState({ email:'', pass:'' });

    const onChange = (e) =>{
        setForm({...form, [e.target.id] : e.target.value });
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log( form );
    }

    return(
        <Index form={form} onChange={onChange} onSubmit={onSubmit} />
    )
};

export default IndexContainer;