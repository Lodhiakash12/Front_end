import React, { Component } from 'react';

class Compo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data }));
            console.log("This is Mounting Phase")

    }

    render() {
        return (
            <div>
                <h2>Users List</h2>
                {this.state.users.map(user => (
                    <div key={user.id}>
                        <p>{user.name} - {user.email}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Compo;