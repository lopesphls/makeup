import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuLink
} from './styled';

export default function index() {
  return (
    <Navbar>
      <NavbarBrand href="/">Maquiagem</NavbarBrand>
      <NavbarMenu>
        <NavbarMenuItem>
          <NavbarMenuLink to="/">Home</NavbarMenuLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarMenuLink to="/produtos">Produtos</NavbarMenuLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarMenuLink to="/contato">Contato</NavbarMenuLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarMenuLink to="/search">Search</NavbarMenuLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
