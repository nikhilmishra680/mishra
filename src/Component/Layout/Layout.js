import React from 'react';
import './Layout.css';

import Siemens from '../../assets/siemens-logo-default.svg';
import Intigrity from '../../assets/siemens-logo-claim.png';

const Layout = props => {
    return <div className="Layout">
        <div className="layout-header">
            <div className="layout-header-logo">
                <img src={Siemens} />
                <img src={Intigrity} />
            </div>
        </div>
        <div>
            {props.children}
        </div>
    </div>
}

export default Layout;