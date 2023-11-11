import React from 'react';
import UserProfile from '../components/UserProfile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true,
        };
    }

    componentDidMount() {
        // Fetch user data from API
        fetch('/api/users/' + this.props.userId)
            .then(response => response.json())
            .then(data => this.setState({ user: data, loading: false }));
    }

    render() {
        const { user, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div id="profile-page">
                <Navbar />
                <UserProfile user={user} />
                <Footer />
            </div>
        );
    }
}

export default Profile;