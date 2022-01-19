import styled from 'styled-components'

export const StyledInputFile = styled.input`
    display: none;
`
export const Display = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


export const StyledLabel = styled.label`
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #4b6091;
    display: inline-block;
    padding: 6px 12px;    
    color: #4b6091;

    &:hover{
        background-color: #324b87;
        color: #ddd;
        cursor: pointer;
    }
`


export const TableStyled = styled.table`
    width: 98%;
    margin-top: 60px;
    border: 1px rgb(22, 41, 70) solid;
    border-radius: 5px 5px 0 0;
    font-size: 14px;
    border-spacing: 0px;
    color: #999;
    background-color: rgb(3, 19, 44);

    td{
        background-color: rgb(4, 8, 24);
        padding: 12px;
        border-bottom: 1px rgb(5, 30, 59) solid;
        text-align: center;
    }

    tr{
        border: 2px rgb(10, 84, 134) solid;
    }

    th{
        
        font-size: 14px;
        padding: 5px;
        color: #999;

    
    }
`
