import React from 'react';
import {object} from 'prop-types';

const Album = ({detail}) => (
    <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        <div className="card-body">
            <p className="card-text">
                {detail.Catalogue}
            </p>
        </div>
    </div>
);

Album.PropTypes = {
    detail: object.isRequired
};

export default Album;
