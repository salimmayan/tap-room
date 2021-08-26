import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
    // const { kegName, kegBrand, kegPrice, kegFlavor, kegId, onHandleDelete, onHandleEdit } = props;

    return (
        <React.Fragment>
            <h1>Keg Detail page</h1>
            <h1>{props.keg.kegName}</h1>
            <p>{props.keg.kegBrand}</p>
            <p>{props.keg.kegPrice}</p>
            <p>{props.keg.kegFlavor}</p>
            <p>{props.keg.kegId}</p>
            <button onClick={() => props.onHandleDelete(props.keg.kegId)}>Delete Keg</button>
            <button onClick={() => props.onHandleEdit(props.keg.kegId)}>Edit Keg</button>
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
