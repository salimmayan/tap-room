import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
    const gridContainer = {
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        gridTemplateColumns: 'auto auto auto',
        gridTemplateRows: 'auto',
        // backgroundColor: '#2196F3',
        padding: '10px',
        margin: '20px',
      }
    return (
        <React.Fragment>
             <div style={gridContainer}>
            {props.kegList.map((currentKeg) => 
                 <Keg whenKegClicked ={props.onKegSelection} onIndividualKeg={currentKeg} whenSellPintClicked = {props.onSellPint} key={currentKeg.kegId}  />
            )}
            </div>
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onKegSelection: PropTypes.func,
    onSellPint: PropTypes.func
}

export default KegList;
