import styled from 'styled-components';

const StyledTag=styled.div`
background-color:#FF6060;
color:white;
width:115px;
height:25px;
padding-left: 15px;
display:flex;
justify-content:center;
align-items:center;
`
export function Tag({className ,content}){
    return(
        <StyledTag className={className}>{content}</StyledTag>
    )
}