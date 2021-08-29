import React from 'react';
import PropTypes from 'prop-types';
import "./Keg.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ReUsableForm(props) {
    return (
        <React.Fragment>            
            <div className="reUsableKegForm coralColor">   
            <h5 className="coralColor">{props.title}</h5>         
            <form onSubmit={props.reusableFormSubmissionHandler}>
                <input required type='text' name='kegName' placeholder='Enter Name' />
                <input required type='text' name='kegBrand' placeholder='Enter Brand' />
                <input required type='number' name='kegPrice' placeholder='Enter Price ($)' />
                <input required type='text' name='kegFlavor' placeholder='Enter Keg Flavor' />
                {/* <input required type='number' name='kegQty' placeholder='Enter Keg Quantity' /> */}
                <button className="btn-primary" required type='submit'>{props.buttonText}</button>
            </form>
            </div>
        </React.Fragment>
    );
}

ReUsableForm.propTypes = {
    buttonText: PropTypes.string,
    resuableFormSubmissionHandler: PropTypes.func,
    title: PropTypes.string
};

export default ReUsableForm;
