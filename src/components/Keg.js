import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    const { kegName, kegBrand, kegPrice, kegFlavor } = props.onIndividualKeg;

    return (
        <React.Fragment>
            <h1>{kegName}</h1>
            <h1>{kegBrand}</h1>
            <h1>{kegPrice}</h1>
            <h1>{kegFlavor}</h1>
        </React.Fragment>
    );
}

Keg.propTypes = {
    onIndividualKeg: PropTypes.string
}

export default Keg;
