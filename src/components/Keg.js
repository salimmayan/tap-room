import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    // const { kegName, kegBrand, kegPrice, kegFlavor, kegId } = props.onIndividualKeg;


      const gridItem = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        padding: '20px',
        fontSize: '30px',
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        width: '50%',
        height: '90%',
        fontSize: 'small'
      }

    return (
        <React.Fragment>
             <div style={gridItem}>

            <h5>Name: {props.onIndividualKeg.kegName}</h5>
            <p>Brand: {props.onIndividualKeg.kegBrand}</p>
            <p>Price: {props.onIndividualKeg.kegPrice}</p>
            <p>Flavor: {props.onIndividualKeg.kegFlavor}</p>
            {/* <p>Id: {props.onIndividualKeg.kegId}</p>  */}
            <p>Qty: {props.onIndividualKeg.kegQty}</p>  
            <p>{props.onIndividualKeg.kegAlertMessage === "Almost Empty !" ? (<span className="purpleColor">{props.onIndividualKeg.kegAlertMessage}</span>) : (<span className="redColor">{props.onIndividualKeg.kegAlertMessage}</span>)}</p>
            {/* <button onClick={() => props.onHandleDelete(props.keg.kegId)}>Delete Keg</button>                      */}
            <button disabled={props.onIndividualKeg.kegDisableButton} onClick = {() => props.whenSellPintClicked(props.onIndividualKeg.kegId)}>Sell Pint</button>
            <button onClick = {() => props.whenKegClicked(props.onIndividualKeg.kegId)}>See Keg Details</button>
            </div>
        </React.Fragment>
    );
}

Keg.propTypes = {
    onIndividualKeg: PropTypes.object,
    whenKegClicked: PropTypes.func,
    whenSellPintClicked: PropTypes.func
}

export default Keg;
