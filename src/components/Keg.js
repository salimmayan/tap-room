import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    return (
        <React.Fragment>
            <h1>{props.onKegName}</h1>
        </React.Fragment>
    );
}

Keg.propTypes = {
    onKegName: PropTypes.string
}

export default Keg;
