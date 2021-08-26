import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
    return (
        <React.Fragment>
            {props.kegList.map((currentKeg) => 
                 <Keg whenKegClicked ={props.onKegSelection} onIndividualKeg={currentKeg} key={currentKeg.kegId} />
            )}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onKegSelection: PropTypes.func
}

export default KegList;
