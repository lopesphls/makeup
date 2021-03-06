import { useEffect, useState } from 'react';
import Api from '../../services/api';
import { Box, BoxLink, Container, Image, Product } from './styled';

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      await Api.get('/products.json')
        .then((response) => {
          setProduct(response.data);
          localStorage.setItem('produtos', JSON.stringify(response.data));
        })
        .catch((err) => {
          console.error(err);
        });
    };
    const produtos = localStorage.getItem('produtos');
    if (produtos) {
      setProduct(JSON.parse(produtos));
    } else {
      getApi();
    }
  }, []);

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
