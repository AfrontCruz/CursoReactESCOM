import React from 'react';

const Welcome = ({trash, trashItem, add, onChange, item, data, form, goBack}) =>(
    <div className="principal">
        <div className="text-center pt-5">
            <h2>Bienvenido {form.email}</h2>
        </div>
        <div className="text-center mt-4">
            <button onClick={goBack} className="btn btn-success">Volver</button>
        </div>
        <div className="container mt-4">
            <form onSubmit={add}>
                <div className="row">
                    <div className="col-md-4 form-group">
                        <label>ID:</label>
                        <input required autoComplete="off" name="id" onChange={onChange} value={item.id} className="form-control" type="text" placeholder="ID"/>
                    </div>
                    <div className="col-md-8 form-group">
                        <label>Nombre:</label>
                        <input required autoComplete="off" name="name" onChange={onChange} value={item.name} className="form-control" type="text" placeholder="Nombre"/>
                    </div>
                </div>
                <div className="text-end mt-4">
                    <button type="submit" className="btn btn-success">Añadir</button>
                </div>
            </form>
        </div>
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th className="text-center" scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (item, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className="text-center"><button id={item.id} onClick={(e) => trashItem(item) } className="btn btn-danger">X</button></td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    </div>
);

export default Welcome;