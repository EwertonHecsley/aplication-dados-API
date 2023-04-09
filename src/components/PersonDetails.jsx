import React from "react";
import PersonCard from "./PersonCard";
import Loading from "./Loading";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            person: [],
            showCard: false,
            personElements: []
        };
    }

    componentDidMount() {
        const url = "https://api.randomuser.me/";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    loading: false,
                    person: data.results
                });
            });
    }

    getUserElements(user) {
        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            age: user.dob.age,
            image: user.picture.thumbnail
        };
    }

    handleShowCard = () => {
        const { person, personElements } = this.state;
        const randomIndex = Math.floor(Math.random() * person.length);
        const randomPerson = this.getUserElements(person[randomIndex]);
        const updatedElements = [...personElements, randomPerson];
        this.setState({
            showCard: true,
            personElements: updatedElements
        });
    };

    render() {
        const { loading, showCard, personElements } = this.state;
        if (loading) return <Loading />;

        return (
            <div className="parent-container">
                <div className="button-container">
                    <button onClick={this.handleShowCard}>Chamar Card</button>
                </div>
                <div className="card-container">
                    {showCard && personElements.map((person) => <PersonCard person={person} />)}
                </div>
            </div>
        );
    }
}

export default App;
