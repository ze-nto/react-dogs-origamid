import React, { useEffect, useState } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router';
import Head from '../Helper/Head';

const LoginPasswordReset = () => {

    const [login, setLogin] = useState();
    const [key, setKey] = useState();
    const password = useForm();
    const { loading, error, request } = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        const param = new URLSearchParams(window.location.search);
        const key = param.get('key');
        const login = param.get('login');

        if(key) setKey(key);
        if(login) setLogin(login);

    }, []);

    async function handleSubmit(e){
        e.preventDefault();
        if(password.validate()){

            const {url, options} = PASSWORD_RESET({
                login,
                key,
                password: password.value
            })
            const { response }  = await request(url, options);
            if(response.ok) navigate('/login');
        }
    }   

    return (
        <div>
            <Head title="Resetar a senha" />
            <h1 className="title">Resete a senha</h1>
            <form onSubmit={handleSubmit}>
                <Input lavel="Nova Senha" type="password" name="password" {...password} />
                {loading? 
                    <Button disabled>Resetando</Button> :
                    <Button>Resetar</Button>
                }
            </form>
            <Error error={error} />
        </div>
    )
}

export default LoginPasswordReset;
