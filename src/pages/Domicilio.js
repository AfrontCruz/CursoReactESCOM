import React from 'react';

const Domicilio = ({
    form,
    onChange
}) =>(
    <div className="container pt-5">
        <div className="form-group">
            <label>Código postal</label>
            <input className="form-control" type="text" onChange={onChange} value={form.cp} placeholder="Ingrese el código postal" />
        </div>
        <div className="row mt-5">
            <p>Estado: {form.estado}</p>
            <p>Municipio: {form.municipio}</p>
        </div>
    </div>
);

export default Domicilio;