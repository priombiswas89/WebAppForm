import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { userData: [], loading: true };

        fetch('api/Users/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ userData: data, loading: false });
            });
    }

    static renderUserDataTable(userData) {
        return (
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th hidden>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user =>
                        <tr key={user.userId}>
                            <td hidden>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phoneNo}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderUserDataTable(this.state.userData);

        return (
            <div>
                <h5>List of Users</h5>
                <p>
                    <Link to="/adduser">Create New</Link>
                </p>
                {contents}
            </div>
        );
    }
}
