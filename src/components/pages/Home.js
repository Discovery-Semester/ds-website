import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class Home extends Component {
    state = {
        text: ''
    };

    componentDidMount() {
        fetch('home.md')
            .then(result => result.text())
            .then(text => {
                this.setState({text})
            });
    }

    render() {
        const {text} = this.state;
        return (
            <ReactMarkdown source={text}/>
        );
    }
}

export default Home;