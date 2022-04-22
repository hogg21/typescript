import { IUser } from "./types/types";
import User from "./User";

interface UsersListProps {
    users: IUser[]
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user =>(
                <User key={user.id} user={user}></User>
            ))}
        </div>
    )
}
export default UsersList;