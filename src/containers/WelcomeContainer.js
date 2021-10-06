import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Welcome from '../pages/Welcome';

const WelcomeContainer = () =>{
    const location = useLocation();
    const history = useHistory();
    const [form, setForm] = useState({});
    const [item, setItem] = useState({id:'', name:''});
    const [data, setData] = useState([
        {id:"004", name:"Oscar Juarez"},
        {id:"002", name:"Alex Fuentes"},
        {id:"001", name:"Joel Villa"}
    ]);

    useEffect(
        () =>{
            setForm( location.state.form );
        },[location]
    );

    const onChange = (e) => setItem({...item, [e.target.name]:e.target.value});

    const goBack = () => history.goBack();

    const add = (e) =>{ 
        e.preventDefault();
        setData([...data, item]);
        setItem({id:'', name:''});
    }

    const trash = (e) => setData( data.filter( item => item.id !== e.target.id ) );

    const trashItem = (item) => setData( data.filter( itemOld => !(itemOld.id === item.id && itemOld.name === item.name) ) );

    return(
        <Welcome trashItem={trashItem} add={add} trash={trash} onChange={onChange} item={item} data={data} form={form} goBack={goBack} />
    )
};

export default WelcomeContainer;