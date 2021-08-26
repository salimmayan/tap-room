import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
    const { kegName, kegBrand, kegPrice, kegFlavor, kegId } = props;

    return (
        <React.Fragment>
            <h1>{kegName}</h1>
            <p>{kegBrand}</p>
            <p>{kegPrice}</p>
            <p>{kegFlavor}</p>
            <p>{kegId}</p>
            <button onClick={() => props.onHandleDelete({ kegId })}>Delete Keg</button>
            <button onClick={() => props.onHandleEdit({ kegId })}>Edit Keg</button>
            <br></br><br></br>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    onHandleDelete: PropTypes.func,
    onHandleEdit: PropTypes.func,
    keg: PropTypes.object
}

export default KegDetail;
