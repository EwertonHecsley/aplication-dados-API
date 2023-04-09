import React from "react";

class Loading extends React.Component {
    render() {
        return (
            <div className="loading">
                <div className="spiner"></div>
                Carregando...
            </div>
        )
    }
};

export default Loading;