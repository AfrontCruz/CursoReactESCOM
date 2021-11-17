import React from 'react';

const Api = ({
    consumir, 
    perfiles,
    onChange,
    nombre
}) =>(
    <div className="container">
        <div className="row">
            <input className="form-control mt-5" type="text" onChange={onChange} value={nombre} placeholder="Ingresa un nombre de GitHub" />
        </div>
        <div className="text-center mt-5">
            <button onClick={consumir} className="btn btn-success">Consumir</button>
        </div>
        <div className="mt-3">
            {
                perfiles.map(
                    (item, i) => (
                        <div key={i}>
                            <img src={item.avatar_url} alt="Perfil" />
                            <a target="_blank" rel="noreferrer" href={item.html_url}>{item.login}</a>
                        </div>
                    )
                )
            }
        </div>
    </div>
);

export default Api;