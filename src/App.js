import './App.css';
import React, { useState } from 'react'

import SampleComponent from './components/SampleComponent/sample'
import PropsComponent from './components/PropsComponent/propsComponent';
import PersonLIstConponent from './components/PersonList/PersonListComponent';
import FormComponent from './components/FormControlComponent/FormComponent';
import Parent from './components/PureComponents/Parent';
import ParentComp from './components/FunctionalPureComponent/ParentComp';
import Refs from './components/Refs/Refs';
import Portals from './components/portals/Portal';

function App() {

  let [obj, setObjState] = useState([{
    Name: "khaja",
    age: 21
  },
  {
    Name: "siri",
    age: 20
  }])



  const changeData = (props) => {

  }

  return (
    <div className="App">
      <SampleComponent />
      <PropsComponent Obj={obj} handleData={changeData} />
      <PersonLIstConponent />
      <FormComponent />
      {/* <Parent></Parent> */}
      <ParentComp />
      <Refs></Refs>
      <Portals></Portals>
    </div>
  );
}

export default App;
