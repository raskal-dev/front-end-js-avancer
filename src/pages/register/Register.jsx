import React, { useState } from 'react';
import Axios from 'axios';

const Register = () => {
    const [nom_user, setNom_user] = useState("");
    const [prenom_user, setPreom_user] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
            nom_user: nom_user,
            prenom_user: prenom_user,
            pseudo: pseudo,
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                setRegisterStatus("Le compte a été créer avec succès");
            }
        })
    }
  return (
    <div>
        <div className="container">
            <div className="loginForm">
                <form>
                <label htmlFor="nom_user">Nom</label>
                <input type="text" name="nom_user" id="nom_user" className="textInput" placeholder='Nom ...' onChange={(e) => {setNom_user(e.target.value)}} required />

                <label htmlFor="prenom_user">Prénom</label>
                <input type="text" name="prenom_user" id="prenom_user" className="textInput" placeholder='Prenom ...' onChange={(e) => {setPreom_user(e.target.value)}} required />

                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" name="pseudo" id="pseudo" className="textInput" placeholder='Pseudo ...' onChange={(e) => {setPseudo(e.target.value)}} required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="textInput" placeholder='Email ...' onChange={(e) => {setEmail(e.target.value)}} required />

                <label htmlFor="password">Mot de pass</label>
                <input type="password" name="password" id="password" className="textInput" placeholder='Password ...' onChange={(e) => {setPassword(e.target.value)}} required />

                <input type="submit" value="Register" onClick={register} className='button' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;
