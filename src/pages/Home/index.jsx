import { useEffect, useState } from 'react';
import Api from '../../services/api';
import { Box, BoxLink, Container, Image, Product } from './styled';

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Api);
    // const produtos = localStorage.getItem('produtos');
    // console.log(produtos);
    // if (produtos) {
    //   setProduct(JSON.parse(produtos));
    // } else {
    //   getApi();
    // }
  }, []);
  console.log(Api);
  console.log(product, 'teste');

  return (
    <Container>
      <Product>
        {product.map((el) => (
          <BoxLink key={el.id} to={`/details/${el.id}`}>
            <Box
              key={el.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={el.api_featured_image} alt="" />
              <p>{el.brand}</p>
              <p>{el.name}</p>
              <p>{el.category}</p>
            </Box>
          </BoxLink>
        ))}
      </Product>
    </Container>
  );
}
