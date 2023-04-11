import React from 'react'
import Counter from './Counter';

function App() {
  function HOCred(props){
    return(
      <h2 style={{backgroundColor :'yellow'}}><props.cmp/></h2>
    )
  }

  function HOCgreen(props){
    return(
      <h2 style={{backgroundColor :'green'}}><props.cmp/></h2>
    )
  }
  return (
    <>
    <HOCred cmp={Counter}/>
    <HOCgreen cmp={Counter}/>

    </>
  )
}
export default  App;
