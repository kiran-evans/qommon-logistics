import axios from "axios";
import { useState } from "react";

const ManagerForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/manager", {
                username: username,
                password: password,
                name: name
            });
            setUsername('');
            setPassword('');
            setName('');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="driverForm">
            <h1>Create New Manager</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <h2>Login details</h2>
                <label htmlFor="username">Username</label>
                <input type="username" name="username" placeholder="e.g. joe.bloggs" value={username} onChange={e => setUsername(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <h2>Personal details</h2>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="e.g. Joe Bloggs" value={name} onChange={e => setName(e.target.value)} />

                <button type="submit">Create manager</button>
            </form>
        </div>
    )
}

export default ManagerForm;