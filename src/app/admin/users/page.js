import Link from "next/link"

import { getAllUsers } from "@services/users/userService"
import { formatDateTimeToDisplay } from "@utils/dateTime"

import { DeleteUser } from "./_components/deleteBtn"

export default async function User() {
    const data = await getAllUsers()

    return (
        <div>
            <h1>User Liste <Link href="/admin/users/add"><button>Ajouter</button></Link></h1>
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
                            <td><DeleteUser uid={user.id}/></td>
                            <td>{user.id}</td>
                            <td><Link href={`/admin/users/edit/${user.id}`}>{user.nom}</Link></td>
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