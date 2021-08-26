import React from 'react';
import PropTypes from 'prop-types';

function ReUsableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.reusableFormSubmissionHandler}>
                <input type='text' name='kegName' placeholder='Enter Name' />
                <input type='text' name='kegBrand' placeholder='Enter Brand' />
                <input type='text' name='kegPrice' placeholder='Enter Price' />
                <input type='text' name='kegFlavor' placeholder='Enter Keg Flavor' />
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReUsableForm.propTypes = {
    buttonText: PropTypes.string,
    resuableFormSubmissionHandler: PropTypes.func
};

export default ReUsableForm;
