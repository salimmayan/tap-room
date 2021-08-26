import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    const { kegName, kegBrand, kegPrice, kegFlavor } = props.onIndividualKeg;

    return (
        <React.Fragment>
            <h1>{kegName}</h1>
            <p>{kegBrand}</p>
            <p>{kegPrice}</p>
            <p>{kegFlavor}</p>
            <button onClick = {props.whenKegClicked}>See Keg Details</button>
        </React.Fragment>
    );
}

Keg.propTypes = {
    onIndividualKeg: PropTypes.string,
    whenKegClicked: PropTypes.func
}

export default Keg;
