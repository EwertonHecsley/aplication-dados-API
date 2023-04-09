import { Component } from "react";

class PersonCard extends Component {
    render() {
        //Desconstruindo o retorno que vira da API
        const { person: { name, email, age, image } } = this.props;
        return (
            <div className="div-central">
                <div className="div-dados">
                    <p>Nome: {name}</p>
                    <p>Email: {email}</p>
                    <p>Idade: {age}</p>
                    <img src={image} alt={name} />
                </div>
            </div>
        );
    }
}


export default PersonCard;