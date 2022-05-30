import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag ,
  TagLabel,
// useDisclosure,
 
} from '@chakra-ui/react';
import { useEffect,useState } from "react";

const Product = ({first,setfirst}) => {

  const [data, setData] = useState([])
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  useEffect(() => {
  fetch(" http://localhost:8080/products")
  .then((r)=>r.json())
  .then((r)=>
  setData(r)
  
  )
  
    
  }, [])
  
  return (
<div>
    
    {data.map((item)=>(
      <Stack data-cy="product">
      <Image data-cy="product-image" src="https://picsum.photos/seed/picsum2/421/261" />
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">Male</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">{item.price}</Box>
    </Stack>


    ))}
    
    </div>
  );
};

export default Product;
