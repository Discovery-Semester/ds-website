import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class About extends Component {
    state = {
        content: ''
    };

    componentDidMount = async () => {
        const response = await fetch('pages/de/about.md');
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

export default About;
