import styled from "styled-components";

export const ComentariosCard = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: rgba(247, 245, 245, 1);
  display: flex;

  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const MiniContainer = styled.div`
  width: 65vw;
  height: 10vh;
  background-color: darkred;
  margin: 20px;
  border-radius: 30px;
  justify-content: space-between;
`;

export const TextoMiniContainer = styled.p`
  color: white;
  font-size: 15pt;
  position: relative;
  margin-top: -40px;
  margin-left: 70px;
`;

export const Input = styled.input`
  width: 65vw;
  height: 40vh;
  background-color: rgba(236, 236, 236, 1);
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  border-radius: 10px;
  /* box-shadow: 0 0.4rem #dfd9d9; */
  outline: none;
  box-sizing: border-box;
`;

export const CardBolinha = styled.div`
  width: 04vw;
  height: 08vh;
  border-radius: 100%;
  margin: 05px;
  background-color: white;
`

export const BotaoPublicar = styled.button`
  border-color: darkred;
  border-radius: 20px;
  background-color: white;
  margin: 08px;
  width: 13vw;
  height: 07vh;
  font-size: 12pt;
  color: darkred;
  margin-left: 470px;

  /* :hover {
    background-color: red;
  } */
`

export const ImagemMascara = styled.img`
  width: 04vw;
  height: 08vh;
`;
