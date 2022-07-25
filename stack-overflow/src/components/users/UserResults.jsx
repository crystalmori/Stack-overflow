import React from 'react'
import {useEffect, useState} from 'react'

function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`https://api.stackexchange.com//2.3/answers?order=desc&sort=activity&site=stackoverflow`, {
            headers: {
                Authorization: `key ${process.env.REACT_APP_STACK_EXCHANGE_KEY}`,
            },
        })

        const data = await response.json()
        console.log(data.items);

        setUsers(data)
        setLoading(false)
    }




  return (
    // <div className='grid grid-cols-1 gap-8 xl:grid-cols-4
    // lg:grid-cols-3 md:grid-cols-2'>
    //   {users.items.map((user) => (
    //     <h3>{user.display_name}</h3>
    //   ))}
    // </div>
    <div>User</div>
  )
}

export default UserResults
