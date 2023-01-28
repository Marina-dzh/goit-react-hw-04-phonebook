
 import styled from '@emotion/styled'
import { Field ,ErrorMessage} from 'formik'
export const Input = styled(Field)`
height: 20px;
border-radius: 4px;
border: 1px solid;
   :hover{
    border-color: black;
   }
`
export const Error= styled(ErrorMessage)`
    background-color: #ffa500;
    border-radius: 4px;
    font-size: 12px;
    width: fit-content;
    padding: 2px;
    margin-top: 2px;
`
export const  Button= styled.button`
    height: 26px;
border-radius: 4px;
margin-top: 20px;
border: 1px solid;
 :hover{
    border-color: black;
    background-color:orange;
 }
  :focus{
       color: #ffffff;
    }
    
`