import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  height: 100vh;
  width: 100%;
  background: rgb(254,226,208);
  background: linear-gradient(302deg, rgba(254,226,208,1) 0%, rgba(255,255,255,1) 46%, rgba(254,226,208,1) 100%);
`;

export const Product = styled.div`
overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80vh;
`;

export const Box = styled(motion.div)`
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 25rem;
  margin: 1rem;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 1.2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 11rem;
  margin-top: 10px;
  object-fit: contain;
`;

export const Content = styled.div`
  display: flex;
`;

export const BoxLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
`;
