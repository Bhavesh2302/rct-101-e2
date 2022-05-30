import React from "react";
import AddProduct from '../components/AddProduct'
import Product from "./Product";
import Pagination from './Pagination'

import {
  Flex ,
  Grid 

} from '@chakra-ui/react'

const Products = ({first,setfirst}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex styles={{display:"flex"}}>
      {/*  AddProduct */} <AddProduct first={first} setfirst={setfirst}/>
      <Grid tyles={{display:"grid"}}>{/* List of Products */}
      <Product first={first} setfirst={setfirst}/></Grid>
      {/* Pagination */}<Pagination first={first} setfirst={setfirst}/>
    </Flex>
  );
};

export default Products;
