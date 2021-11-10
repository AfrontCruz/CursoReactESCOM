import React from 'react';

const Api = ({consumir, perfiles}) =>(
    <div className="container">
        <div className="text-center mt-5">
            <button onClick={consumir} className="btn btn-success">Consumir</button>
        </div>
        <div className="mt-3">
            {
                perfiles.map(
                    (item, i) => (
                        <div>
                            <img src={item.avatar_url} alt="Perfil" />
                            <a target="_blank" rel="noreferrer" href={item.html_url} key={i}>{item.login}</a>
                        </div>
                    )
                )
            }
        </div>
    </div>
);

export default Api;