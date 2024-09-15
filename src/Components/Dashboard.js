import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/user-info', {withCredentials: true})
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error("Error occured: ", error);
        })
    }, []);

    return(
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <div>
                <p><strong>Name:</strong> {user.name} </p>
                <p><strong>Login:</strong> {user.login} </p>
                <p><strong>Email:</strong> {user.email} </p>
                <p><strong>Total Repos:</strong> {user.total_private_repos}</p>
                {user.picture && <img src={user.picture}
                        alt="User profile"
                        // Referrer policy missing may cause error? (CORS)
                        referrerPolicy="no-referrer"></img>}
            </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default Dashboard;