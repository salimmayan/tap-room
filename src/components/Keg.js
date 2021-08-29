import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Keg.css";

function Keg(props) {
    // const { kegName, kegBrand, kegPrice, kegFlavor, kegId } = props.onIndividualKeg;

    const gridItem = {
        // backgroundColor: 'azure',
        // border: '1px solid rgba(0, 0, 0, 0.8)',
        // padding: '10px',
        // fontSize: '30px',
        // textAlign: 'center',
        // padding: '5px',
        // margin: '10%',
        // flexBasis: '25%',
        // fontSize: 'small',
        // borderRadius: '5px'
        // display: 'flex',
        // flex: '1',
        // flexGrow: '1',
        width: '30%',
        background: '#ddd',
        margin: '10px',
        padding: '10px',
        marginLeft: '10px',
        marginRight: '10px',
        border: '1px solid rgba(0, 0, 0, 0.8)'
    }

    const coralColor = {
        color: 'blue',
        fontFamily: 'Indie Flower", cursive',
        fontWeight: '700',
        textAlign: 'center'
    }


    const left = Math.trunc(props.now);
    return (

        <React.Fragment>
            <div style={gridItem} >
                <ProgressBar now={props.now} animated striped variant="warning" label={`${left}% left`} />
                <h5 style={coralColor}> {props.onIndividualKeg.kegName}</h5>
                <span className="alignleft">Brand: </span><span className="alignright">{props.onIndividualKeg.kegBrand}</span> <br></br>
                <span className="alignleft">Price: </span><span className="alignright">{props.onIndividualKeg.kegPrice}</span> <br></br>
                <span className="alignleft">Flavor: </span><span className="alignright">{props.onIndividualKeg.kegFlavor}</span> <br></br>
                <span className="alignleft">Qty: </span><span className="alignright">{props.onIndividualKeg.kegQty > 9 ? (<span className="coralColor">{props.onIndividualKeg.kegQty}</span>) : (<span className="redColor">{props.onIndividualKeg.kegQty}</span>)}</span> <br></br><br></br>
                <p className="paraMargin">{props.onIndividualKeg.kegAlertMessage === "Almost Empty !" ? (<span className="purpleColor">{props.onIndividualKeg.kegAlertMessage}</span>) : (<span className="redColor">{props.onIndividualKeg.kegAlertMessage}</span>)}</p>
                <div className="kegDetailButton">
                    <button className="btn-success" disabled={props.onIndividualKeg.kegDisableButton} onClick={() => props.whenSellPintClicked(props.onIndividualKeg.kegId)}>Sell Pint</button><br></br><br></br>
                    <button className="btn-warning" onClick={() => props.whenKegClicked(props.onIndividualKeg.kegId)}>See Keg Details</button>
                </div>
            </div>
        </React.Fragment >
    );
}

Keg.propTypes = {
    onIndividualKeg: PropTypes.object,
    whenKegClicked: PropTypes.func,
    whenSellPintClicked: PropTypes.func
}

export default Keg;
