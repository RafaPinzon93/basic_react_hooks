import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
    state = { resources: [] };

    componentDidMount() {
        this.getResponse();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            this.getResponse();
        }
    }

    async getResponse() {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${this.props.resource}`
        );

        this.setState({ resources: response.data });
    }

    render() {
        return <div>{this.state.resources.length}</div>;
    }
}

export default ResourceList;
