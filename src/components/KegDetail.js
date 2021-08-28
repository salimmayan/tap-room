import React from 'react';
import PropTypes from 'prop-types';
import "./Keg.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function KegDetail(props) {
    // const { kegName, kegBrand, kegPrice, kegFlavor, kegId, onHandleDelete, onHandleEdit } = props;
    const coralColor = {
        color: 'coral',
        fontFamily: 'Indie Flower", cursive',
        fontWeight: '700',
        textAlign: 'center'
    }

    return (
        <React.Fragment>
            <div className="kegDetail coralColor">
                <h5 style={coralColor}>Details Page for {props.keg.kegName}</h5>
                <span className="alignleft">Brand: </span><span className="alignright">{props.keg.kegBrand}</span> <br></br>
                <span className="alignleft">Price: </span><span className="alignright">{props.keg.kegPrice}</span> <br></br>
                <span className="alignleft">Flavor: </span><span className="alignright">{props.keg.kegFlavor}</span> <br></br>
                <span className="alignleft">Qty: </span><span className="alignright">{props.keg.kegQty}</span> <br></br>
                <span className="alignleft">Keg ID: </span><span className="alignright">{props.keg.kegId}</span> <br></br>
                <button className="btn-danger" onClick={() => props.onHandleDelete(props.keg.kegId)}>Delete Keg</button>&nbsp;  &nbsp;
                <button className="btn-warning" onClick={() => props.onHandleEdit(props.keg.kegId)}>Edit Keg</button>
                <br></br><br></br>
            </div>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    onHandleDelete: PropTypes.func,
    onHandleEdit: PropTypes.func,
    keg: PropTypes.object
}

export default KegDetail;
