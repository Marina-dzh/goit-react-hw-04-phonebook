
import { Input, Text } from "./Filter.styled"
export const Filter = ({ changeFilter, filter }) => {
    return (
       <>
            <Text>Find contacts by name</Text>
            <Input type="text" onChange={ changeFilter} value={filter} />
            
        </>     
    )
}
