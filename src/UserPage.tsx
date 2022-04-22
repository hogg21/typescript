import React from 'react'
import { IUser } from './types/types'
import axios from 'axios'
import User from './User'
import List from './List'

const UserPage = () => {
    const [users, setUsers] = React.useState<IUser[]>([])

    React.useEffect(() => {
        fetchUser()
    }, [])
    async function fetchUser() {
        try {
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
          setUsers(response.data)
        } catch(e) {
          alert(e)
        }
      }
    return (
        <div>
            <List items={users} renderItem={(user: IUser) => <User user={user} key={user.id}></User>}></List>
        </div>
    );
}

export default UserPage