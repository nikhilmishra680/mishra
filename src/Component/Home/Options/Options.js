import React from 'react';

const Options = props => {
    const o = props.optionSlector.map((opt,ind) => {
        return <div key={ind}>
        <input type="checkbox" checked={opt.selected} onChange={() => props.checkBoxToggler(ind)}/>
            <span>{opt.name}</span>
        </div>
    })
    o.push(<div key='all'>
    <input type="checkbox" checked={props.allSelected} onChange={props.AllToggler}/>
        <span>All</span>
    </div>)

    const r = props.results.map((res , ind) => {
        return <div className="end-Result" key={ind}>{res}</div>
    })
    return <div>
    <div className="Options">
        <div className="Options-header">
            <span>PoductId: {props.productId}</span>
            <span className="Options-header-link"><a href={props.blockChainLink} target="_blank">VIEW BLOCKCHAIN</a></span>
        </div>
        <div className="Options-list">
            {o}
        </div>
        <div className="options-submit-button" onClick={props.finalSubmitHandler}>SUBMIT</div>
    </div>
    {props.results.length ? <div className="result-container">
        {r}
    </div>:null}
    </div>
}

export default Options;