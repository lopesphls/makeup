import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import {
  Box, BoxImage, BoxText, Container, Image
} from './styled';

export default function Details() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getId = async () => {
      await api.get(`/products/${id}.json`)
        .then((response) => setProduct(response.data))
        .catch((error) => {
          console.error(error);
        });
    };
    getId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Box>
        <BoxImage>
          <Image src={product.api_featured_image} alt="" />
        </BoxImage>
        <BoxText>
          <h3>
            {product.name}
            -
            {product.brand}
          </h3>
          <h3>{product.category}</h3>
          <p>{product.product_type}</p>
          <h3>
            <a href={product.website_link} target="_blank" rel="noreferrer">
              teste
            </a>
          </h3>
          <p>{product.description}</p>
        </BoxText>
      </Box>
    </Container>
  );
}
