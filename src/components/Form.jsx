import { Formik, Form,   } from "formik";
import * as yup from 'yup';
import "yup-phone";
import PropTypes from 'prop-types';
import { Input,Error, Button } from "./Form.styled";
import React, { Component } from "react";


const initialValues = {

    name: "",
    number: ""
};
const schema = yup.object().shape({
    name: yup.string().required().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" ),
number:yup.string().required().phone('UA', true, `phone number must be 9 digits and can contain spaces, dashes, parentheses and can start with "+380" or "0" `)
})

export class ContactForm extends Component  {
static propTypes = {addContact: PropTypes.func,}

    state = {
         name: '',
        number: ''
    }
   
    render() {

    const  handleSubmit = (values, {resetForm}) => {
    
this.props.addContact(values)
        resetForm()
        
    }
    
 
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            
           <Form >
               
               <div>
                   <h3>Name</h3>
    <Input
  type="text"
  name="name"/>
                    <Error name="name" component="div" />
               </div>
<div>
                   <h3>Phone</h3>
    <Input
  type="tel"
  name="number"

/><Error name="number" component="div" />
               </div>

        <Button type="subbmit" >Add contact</Button>
           </Form></Formik>
       )
   }  }

Formik.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: PropTypes.exact({
        name: PropTypes.string,
        number: PropTypes.string,
    }),
    validationSchema:PropTypes.object,

}