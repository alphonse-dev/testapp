import React , {useEffect , useState} from 'react'
import axios from 'axios';

export default function Users() {

    const [users , setUsers] = useState([])

    useEffect(()=>{
        axios.get(`/api/users`)
        .then(res => {
            const persons = res.data;
            setUsers(persons)
        })
    } , [])

    return (
        <div>
            {
                users.map((user) => (
                    <h4 key={user.id}>{user.name}</h4>
                ))
            }
        </div>
    )
}
