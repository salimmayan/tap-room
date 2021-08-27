import React from 'react';
import PropTypes from 'prop-types';

function ReUsableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.reusableFormSubmissionHandler}>
                <input required type='text' name='kegName' placeholder='Enter Name' />
                <input required type='text' name='kegBrand' placeholder='Enter Brand' />
                <input required type='number' name='kegPrice' placeholder='Enter Price ($)' />
                <input required type='text' name='kegFlavor' placeholder='Enter Keg Flavor' />
                {/* <input required type='number' name='kegQty' placeholder='Enter Keg Quantity' /> */}
                <button required type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReUsableForm.propTypes = {
    buttonText: PropTypes.string,
    resuableFormSubmissionHandler: PropTypes.func
};

export default ReUsableForm;
