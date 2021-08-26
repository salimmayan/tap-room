import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    // const { kegName, kegBrand, kegPrice, kegFlavor, kegId } = props.onIndividualKeg;

    return (
        <React.Fragment>
            <h1>{props.onIndividualKeg.kegName}</h1>
            <p>{props.onIndividualKeg.kegBrand}</p>
            <p>{props.onIndividualKeg.kegPrice}</p>
            <p>{props.onIndividualKeg.kegFlavor}</p>
            <p>{props.onIndividualKeg.kegId}</p>
            <button onClick = {() => props.whenKegClicked(props.onIndividualKeg.kegId)}>See Keg Details</button>
        </React.Fragment>
    );
}

Keg.propTypes = {
    onIndividualKeg: PropTypes.object,
    whenKegClicked: PropTypes.func
}

export default Keg;
