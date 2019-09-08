import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class Mentors extends Component {
    state = {
        content: ''
    };

    componentDidMount = async () => {
        const response = await fetch('pages/de/mentors.md');
        const content = await response.text();
        this.setState({content});
    };

    render() {
        const {content} = this.state;
        return (
            <ReactMarkdown source={content}/>
        );
    }
}

export default Mentors;