import styled from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

export const NoteInput = styled.input`
width: 20vw;
height: 4vh;
font-size: 1.5rem;
border-color: #333333;
outline-color: #333333;
padding: .55rem;
@media screen and (max-width: 768px) {
	height: 2vh;
	font-size: 1rem;
	}
`
export const NoteButton = styled.button`
width: 20vw;
height: 6.5vh;
border: none;
background-color: #C84C09;
color: white;
font-size: 1.5rem;
font-family: 'Space Mono', monospace;
margin: 1rem;
&:hover{
background-color: white;
color: #333333;
cursor: pointer;
}
@media screen and (max-width: 768px) {
	font-size: 1rem;
	}
`