import React, { useEffect, useState } from 'react';
import getRamdomUser from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     obtainUser();
    // }, []);

    const obtainUser = () => {
        getRamdomUser()
            .then((response) => {
                if(response.status === 200){
                    setUser(response.data.results)
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }
    return (
        <div>
            <h1>Axios example</h1>
            {user != null ?
                (
                    <div>
                        {/* <img alt='avatar' src={user.picture.larger}/> */}
                        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <h3>{user.name.email}</h3>
                    </div>
                    
                ):
                (
                    <div>
                        <p>Generate a new user</p>
                        <button onClick={obtainUser}>Random user</button>
                    </div>
                    
                )
            
            }
        </div>
    );
}

export default AxiosExample;
