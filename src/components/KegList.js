import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
    return (
        <React.Fragment>
            {props.kegList.map((currentKeg) => 
                 <Keg whenKegClicked ={props.onKegSelection} onIndividualKeg={currentKeg} whenSellPintClicked = {props.onSellPint} key={currentKeg.kegId}  />
            )}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onKegSelection: PropTypes.func,
    onSellPint: PropTypes.func
}

export default KegList;
