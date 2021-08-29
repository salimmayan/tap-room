import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
    const gridContainer = {
        display: 'flex',
        flexFlow: 'flexStart',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 'auto, 330px, auto, 330px',
        marginTop: '10px',
        marginBottom: '50px',
        marginRight: '15%',
        marginLeft: '15%',
        padding: '20px',
        // height: '80vh',
        background: '#F1F1F1',
        border: '1px solid red',
        flexWrap: 'wrap',
        borderRadius: '9px'
    }
    return (
        <React.Fragment>
            <div style={gridContainer}>
                {props.kegList.map((currentKeg) =>
                    <Keg now={(currentKeg.kegQty / 24) * 100} whenKegClicked={props.onKegSelection} onIndividualKeg={currentKeg} whenSellPintClicked={props.onSellPint} key={currentKeg.kegId} />
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
