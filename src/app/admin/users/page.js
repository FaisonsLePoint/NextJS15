import { getAllUsers } from "@services/users/userService"
import { formatDateTimeToDisplay } from "@utils/dateTime"

export default async function User() {
    const data = await getAllUsers()

    return (
        <div>
            <h1>User Liste</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Créé le</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, i) => (
                        <tr key={i}>
                            <td>Button</td>
                            <td>{user.id}</td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{formatDateTimeToDisplay(user.createdAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}