import { IUser } from "./types/types"

export interface UserProps {
    user: IUser
}

const User: React.FC<UserProps> = ({user}) => {
    return (
        <div key={user.id}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
}
export default User;