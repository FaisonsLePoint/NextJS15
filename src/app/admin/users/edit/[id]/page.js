import { notFound } from "next/navigation";

import { getUserById } from "@services/users/userService";

import UserForm from '../../_components/userFrom'

export default async function Edit({params}) {
    const {id} = await params

    if(isNaN(id)) notFound()

    const data = await getUserById(id)

    return (
        <div>
            <h1>Modification Utilisateur</h1>
            <p>Utilisateur id: {id}</p>
            <UserForm mode="edit" user={data}/>
        </div>
    );
}