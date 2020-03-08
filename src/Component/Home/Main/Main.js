import React from 'react';

const Main = props => {
    return <div className="Main">
        <div>
            <span>Enter Product Id:</span>
            <input type="text" value ={props.productId} onChange={(e) => props.setProductId(e.target.value)}/>
        </div>
        <div>
            <span>Enter Issue:</span>
            <input type="text" value ={props.issue} onChange={(e) => props.setIssue(e.target.value)}/>
        </div>
        <div>
            <span>Do you know ID of a working product</span>
            <input type="checkbox" value={props.workOption} onChange={(e) => props.workOptionToggler(e.target.value)} style={{"width":"10%"}}/>
        </div>
        <div>
            <span>Enter Id of working product:</span>
            <input type="text" value ={props.workingProductId} onChange={(e) => props.wokingProductHAndler(e.target.value)} disabled={!props.workOption}/>
        </div>
        <div className="main-next-button" onClick={props.optionChangeHandler}>NEXT &#8811;</div>
    </div>
}

export default Main