import UserForm from '../_components/userFrom'

export default async function Add() {

    return (
        <div>
            <h1>Ajout d'un Utilisateur</h1>
            <UserForm mode="add"/>
        </div>
    );
}