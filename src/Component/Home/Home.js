import React, { useState } from 'react';
import './Home.css';
import Main from './Main/Main';
import Options from './Options/Options';
import axios from '../../axiosbase';

const Home = props => {
    const [options , setOptions] = useState(false);
    const [productId , setProductId] = useState('');
    const [issue , setIssue] = useState('');
    const [workOption , setWorkOption] = useState(false);
    const [workingProductId , setWorkingProductId] = useState('');

    const [loading , setLoading] = useState(0);

    const [blockChainLink , setBlockchainLink] = useState('')
    const [optionSlector , setOptionSelector] = useState([
        {name:'Expiry Check',
        selected:false,
        link:'expirycheck'},
        
        {name:'Maintenance Check',
        selected:false,
        link:'expirycheck'},
        
        {name:'Sensors Check',
        selected:false,
        link:'sensorcheck'},
        
        {name:'Operator Check',
        selected:false,
        link:'operatorcheck'}
    ])
    const [allSelector , setAllSelector] = useState(false)
    const [results , setResults] = useState([])

    const optionChangeHandler = () => {
        
        setOptions(true)
        axios.get(`/getBlockchainAddress/${productId}`)
        .then(res => {
            console.log(res)
            setBlockchainLink(`https://ropsten.etherscan.io/address/${res.data}`)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const workOptionToggler = () => {
        let w = workOption
        setWorkOption(!w)
    }
    const wokingProductHAndler = (val) => {
        if(!workOption){
            console.log(true)
            alert('Please choose option of entering Working Product');
            return
        }
        setWorkingProductId(val)
    }

    const checkBoxToggler = (i) => {
        var mutOpt = JSON.parse(JSON.stringify(optionSlector));
        mutOpt[i].selected = !mutOpt[i].selected;
        setOptionSelector(mutOpt)
        console.log(optionSlector)
    }

    const AllToggler = () => {
        console.log('alltoggler',allSelector)
        let all = !allSelector;
        var mutOpt = JSON.parse(JSON.stringify(optionSlector));
        for(let i=0;i<mutOpt.length ;i++){
            mutOpt[i].selected = all;
        }
        setOptionSelector(mutOpt)
        setAllSelector(all)
    }

    const finalSubmitHandler = () => {
        setResults([]);
        let workId = workingProductId;
        if(workId === ''){
            workId='no';
        }
        let opt = [...optionSlector];
        var l = 0
        for(let i=0;i<opt.length;i++){
            if(opt[i].selected){
                l++
            }
        }
        setLoading(l)
        let allRes = [...results]
        for(let i=0;i<opt.length;i++){
            let o = opt[i];
            if(o.selected){
                console.log(l)
                axios.get(`/${o.link}/${productId}/${workId}`)
                .then(res => {
                    l=l-1
                    allRes.push(res.data)
                    console.log(results)
                    setLoading(l)
                    setResults([...allRes])
                })
                .catch(err => {
                    l=l-1;
                    console.log(err);
                    setLoading(l);
                    console.log(loading)
                })
            }
        }
        
    }
    console.log(workOption)

    return <div className="Home">
        {!options ? <Main 
        productId = {productId}
        issue={issue}
        workOption={workOption}
        workingProductId={workingProductId}
        setProductId={setProductId}
        setIssue={setIssue}
        setWorkOption={setWorkOption}
        wokingProductHAndler={wokingProductHAndler}
        optionChangeHandler={optionChangeHandler}
        workOptionToggler={workOptionToggler}
        />:
        <Options 
        optionSlector={optionSlector}
        productId={productId}
        blockChainLink={blockChainLink}
        productId={productId}
        checkBoxToggler={checkBoxToggler}
        AllToggler={AllToggler}
        finalSubmitHandler={finalSubmitHandler}
        results={results}/>}
        {loading!==0 ?<div className="spinner-loader">
            <div className="lds-dual-ring"></div>
        </div>:null}
        {loading!==0 ?<div className="backdrop"></div>:null}
    </div>
}

export default Home