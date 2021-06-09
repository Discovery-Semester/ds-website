import React from 'react';
import { connect } from "react-redux";
import { IApplicationState } from '../../store/reducers/Store';
import ContentRender from "./content/ContentRender";

interface IProps {
    currentLanguage: string,
    match: any,
}

class Page extends React.Component<IProps> {
    state = {
        content: ''
    };

    componentDidMount = async () => {
        const language = this.props.currentLanguage;
        const path = this.props.match.path;
        await this.fetchContent(language, path);
    };

    componentDidUpdate = async (prevProps:IProps) => {
        const oldLanguage = prevProps.currentLanguage;
        const language = this.props.currentLanguage;
        const oldPath = prevProps.match.path;
        const path = this.props.match.path;
        if ((oldPath !== path) || (oldLanguage !== language)) {
            await this.fetchContent(language, path);
        }
    };

    fetchContent = async (currentLanguage:string, path:string) => {
        // because if the path doesn't match any element from the list, we load the homepage
        const actualPath = path === '/' ? '/home' : path;
        const response = await fetch(`pages/${currentLanguage}${actualPath}.md`);
        const content = await response.text();
        this.setState({content});
    };

    render() {
        const {content} = this.state;
        return (
            <ContentRender content={content}/>
        );
    }
}

const mapStateToProps = (store: IApplicationState) => {
    return {
        currentLanguage: store.languages.currentLanguage
    }
};

export default connect(mapStateToProps, null)(Page);