import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px grey solid;
  z-index: 100;
`;

export const NavbarBrand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #13102d;
  margin-left: 1rem;
  text-decoration: none;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 22rem;
  margin-right: 2rem;
  `;

export const NavbarMenuItem = styled.li`
  width: 100%;
  text-align: center;
  margin-right: 1rem;
  `;

export const NavbarMenuLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #13102d;
  width: 100%;
  &:hover {
    width: 100%;
    height: 3rem;
    border-bottom: 3px #f45665 solid;
  }
  &:active {
    border-bottom: 3px #f45665 solid;
  }
`;
