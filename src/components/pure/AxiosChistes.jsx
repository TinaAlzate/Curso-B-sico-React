import React, { useEffect, useState } from 'react';
import getRandomChistes from '../../services/axiosService';
import {Button} from '@mui/material'

const AxiosChistes = () => {

    const [chiste, setChiste] = useState(null);
    const [like, setLike] = useState(0);
    const [notLike, setNotLike] = useState(0);

    useEffect(() => {
        setTimeout(() =>{
            setChiste('Gracias por jugar');
        }, 5000)
    });

    const obtainChiste = () => {
        getRandomChistes()
            .then((response) => {
                if (response.status === 200){
                    setChiste(response.data.value)
                    console.log(response.data.value)
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }

    const plusLike = () => {
        setLike(like+1)
    }
    const plusNotLike = () => {
        setNotLike(notLike+1)
    }
    return (
        <div>
            <h1>Axios chistes</h1>
            {
                chiste !== null ?
                    (
                        <div>
                            <p>{chiste}</p>
                            <Button onClick={obtainChiste}>Generar chiste</Button>
                            <Button onClick={plusLike} variant="outlined">Like</Button>
                            <Button onClick={plusNotLike}variant="outlined">Don't like</Button>
                        </div>
                    ): 
                    (
                        <div>
                            <Button onClick={obtainChiste}>Generar chiste</Button>
                        </div>
                    )
            }
            {
                chiste === 'Gracias por jugar'  ?
                (
                    <div>
                        <p>Likes: {like}</p>
                        <p>Don't like: {notLike}</p>
                    </div>
                ):
                (
                    null
                )
            }
            
        </div>
    );
}

export default AxiosChistes;
