import React from "react";
import {
  Button,
  Modal,
  Input,
  Select,
  RadioGroup,
  ModalBody,
Radio ,
useDisclosure,
 
} from '@chakra-ui/react';

import { useState} from "react";

const AddProduct = ({first,setfirst}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const [form, setForm] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [value, setValue] = useState('Male')

  const [newdata, setNewdata] = useState([])

  const handleChange=(e)=>{

let {name,value}=e.target
console.log(name,value)


setForm({...form,[name]:value})
setValue(value)

  }

  const saveInfo=(e)=>{
    e.preventDefault()
    console.log(form)



    fetch("http://localhost:8080/products",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
title:form.title,
category:form.category,
price:form.price,


      })
    })
    .then((r)=>r.json())
    .then((r)=>{
    setNewdata([...newdata,r])
  })

  }
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add new Product</Button>
     
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" name="title"value={form.title} placeholder="Title"onChange={handleChange}/>
          <Select data-cy="add-product-category" name="category" value={form.category} onChange={handleChange}>
            <option data-cy="add-product-category-shirt" name="shirt"> Shirt</option>
            <option data-cy="add-product-category-pant"name="pant" >Pant</option>
            <option data-cy="add-product-category-jeans" name="jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" type="radio" name="Gender"onChange={handleChange} value={value}>
            <Radio data-cy="add-product-gender-male"value="Male" >Male</Radio>
            <Radio data-cy="add-product-gender-female" value="Female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value="Unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name="price"value={form.price}placeholder="price" onChange={handleChange}/>
          
          <Button data-cy="add-product-submit-button"type="submit" onClick={saveInfo}>submit</Button>
        </ModalBody>
       
      </Modal>
    
    </>
  );
};

export default AddProduct;
