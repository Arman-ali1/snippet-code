import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormPage from './components/FormPage';
import EntriesPage from './components/EntriesPage';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'


function App() {
  const [entries, setEntries] = useState([]);

  const handleSubmit = (formData) => {
    setEntries((prevEntries) => [...prevEntries, { ...formData, timestamp: new Date().toLocaleString() }]);
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/' element={<Layout />}>
        <Route path='' element={<FormPage />} />
        <Route path='/result' flage={true} element={<EntriesPage />} />
        {/* <Route path='/contest/result' element={<Result />} /> */}
      </Route>
    )
  )

  return (
    
      <div className="App">
        <RouterProvider router={router} />
        {/* <EntriesPage/> */}
      </div>
    
  );
}

export default App;
