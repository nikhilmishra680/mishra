import React from 'react';

import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
