import React from 'react';
import Logo from '../images/logo.png';

const Index = ({form, onChange, onSubmit}) => (
    <div className="principal">
        <div className="container-form">
            <div className="text-center">
                <h3>{form.email}</h3>
            </div>
            <form onSubmit={onSubmit} className="form-react">
                <div className="text-center mb-4">
                    <img src={Logo} alt="Logo Escom" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={onChange} value={form.email} type="email" className="form-control" name="email" id="email" placeholder="name@example.com" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input onChange={onChange} value={form.pass} type="password" className="form-control" name="pass" id="pass" placeholder="password" />
                </div>
                <div className="text-center mt-3">
                    <button type="submit" className="btn btn-success">Send</button>
                </div>
            </form>
        </div>
        </div>
        );

        export default Index;