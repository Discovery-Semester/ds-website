import React from 'react';

const FbPagePlugin = props => {
    return (
        <div className="fb-page"
             data-href="https://www.facebook.com/discsem/"
             data-tabs="timeline"
             data-width="340"
             data-height = ""
             data-small-header="false"
             data-adapt-container-width="true"
             data-hide-cover="false"
             data-show-facepile="true"
        >
            <blockquote cite="https://www.facebook.com/discsem/"
                        className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/discsem/">Discovery Semester ETHZ</a>
            </blockquote>
        </div>
    );
};

export default FbPagePlugin;