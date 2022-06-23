import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: rgb(254,226,208);
  background: linear-gradient(302deg, rgba(254,226,208,1) 0%, rgba(255,255,255,1) 46%, rgba(254,226,208,1) 100%);
`;

export const Box = styled.div`
  height: auto;
  width: 80%;
  max-width: 56rem;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 5px 1rem 0 rgba(0,0,0,0.5);
  background-color: #FFFFFF;
`;

export const BoxImage = styled.div`
  height: 20rem;
  width: 15rem;
  justify-self: flex-start;
  `;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const BoxText = styled.div`
  height: 100%;
  width: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
