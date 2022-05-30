import React, { useState,useEffect } from "react";

import {
  Button,
  ButtonGroup,
  Select

} from '@chakra-ui/react'
const Pagination = ({first,setfirst}) => {
  const[data,setData]=useState([])
  const[page,setPage]=useState(1)
  const[limit,setlimit]=useState(3)
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;


   useEffect(() => {
  fetch(` http://localhost:8080/products?_page=${page}&_limit=${limit}`)
  .then((r)=>r.json())
  .then((r)=>
  setData(r)
 
  )
  
    
  }, [page,limit])
  

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>setPage(1)}>first</Button>
      <Button data-cy="pagination-previous-button"onClick={()=>setPage(page-1)}>previous</Button>
      <Select data-cy="pagination-limit-select"  onChange={(e)=>(setlimit(e.target.value))}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button"onClick={()=>setPage(page+1)}>next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>setPage(3)}>last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
