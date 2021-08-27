import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Keg(props) {
    // const { kegName, kegBrand, kegPrice, kegFlavor, kegId } = props.onIndividualKeg;


    const gridItem = {
        backgroundColor: '#9ACD32',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        padding: '20px',
        fontSize: '30px',
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        width: '30%',
        height: '100%',
        fontSize: 'small',
        borderRadius: '5px'
    }

    const labelCSS = {
        textAlign: 'center',
        color: 'orange'
    }

    const coralColor = {
        color: 'coral',
        fontFamily: 'Indie Flower", cursive',
        fontWeight: '700',
        textAlign: 'right'
      }

      const pElement = {
        color: 'black',
        fontFamily: 'Indie Flower", cursive',
        fontWeight: '700',
        textAlign: 'left'
      }


    const left = Math.trunc(props.now);
    return (

        <React.Fragment>
            <div style={gridItem} >
                <ProgressBar now={props.now} animated striped variant="warning" label={`${left}% left`} />
                <h5 style={coralColor}> {props.onIndividualKeg.kegName}</h5>
                <p><span style={pElement}>Brand: </span><span style={coralColor}>{props.onIndividualKeg.kegBrand}</span></p>
                <p>Price: <span style={coralColor}>{props.onIndividualKeg.kegPrice}</span></p>
                <p>Flavor: <span style={coralColor}>{props.onIndividualKeg.kegFlavor}</span></p>
                {/* <p>Id: {props.onIndividualKeg.kegId}</p>  */}
                <p>Qty: <span style={coralColor}>{props.onIndividualKeg.kegQty}</span></p>
                <p>{props.onIndividualKeg.kegAlertMessage === "Almost Empty !" ? (<span className="purpleColor">{props.onIndividualKeg.kegAlertMessage}</span>) : (<span className="redColor">{props.onIndividualKeg.kegAlertMessage}</span>)}</p>
                {/* <button onClick={() => props.onHandleDelete(props.keg.kegId)}>Delete Keg</button>                      */}
                <button disabled={props.onIndividualKeg.kegDisableButton} onClick={() => props.whenSellPintClicked(props.onIndividualKeg.kegId)}>Sell Pint</button>
                <button onClick={() => props.whenKegClicked(props.onIndividualKeg.kegId)}>See Keg Details</button>
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
