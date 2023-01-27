
import styled from '@emotion/styled'
export const List = styled.ul`

 padding: 0;
 `
export const Item = styled.div`
 width: 100% ;
    display: flex;
    justify-content: space-between;
    align-items:center;
   height: 48px;
   border-bottom: 1px solid black;
:last-child{
    border: none;
}
 `
  export const Number = styled.div`
    font-size: 12px;
    
 `
export const Button = styled.button`
      height: 26px;
      border-radius: 4px;
border: 1px solid;
 
 :hover{
    border-color: black;
    background-color:orange;
    
   
 }
    :focus{
       color: white;
    }
 `