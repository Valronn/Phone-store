import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.08rem solid ${props => props.buttonContainerColor|| 'var(--lightBlue)'};
color: ${props => props.buttonContainerColor|| 'var(--lightBlue)'};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
	border: 0.08rem solid var(--mainGolden);
	background: var(--mainBlack);
	color: var(--mainGolden);
}
&:focus{
	outline:none;
 }

`;