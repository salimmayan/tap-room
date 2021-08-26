import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    const { kegName, kegBrand, kegPrice, kegFlavor, kegId, whenKegClicked } = props;

    return (
        <React.Fragment>
            <h1>{kegName}</h1>
            <p>{kegBrand}</p>
            <p>{kegPrice}</p>
            <p>{kegFlavor}</p>
            <p>{kegId}</p>
            <button onClick = {() => whenKegClicked(kegId)}>See Keg Details</button>
        </React.Fragment>
    );
}

Keg.propTypes = {
    onIndividualKeg: PropTypes.object,
    whenKegClicked: PropTypes.func
}

export default Keg;
