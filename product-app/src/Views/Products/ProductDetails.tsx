import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { fetchProductDetails } from "../../services/productAPI";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    fetchProductDetails(setProduct, parseInt(productId!, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2} paddingY={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Product Detail</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                border: "rgba(0, 0, 0, 0.38) solid 1px",
                borderRadius: 1,
                padding: 2,
              }}
            >
              <Typography variant="h6">{product?.title}</Typography>
              <Typography variant="body1">{product?.description}</Typography>
              <Typography variant="body1">Price: {product?.price}</Typography>
              <Typography variant="body1">
                Discount: {product?.discountPercentage}
              </Typography>
              <Typography variant="body1">Rating: {product?.rating}</Typography>
              <Typography variant="body1">Stock: {product?.stock}</Typography>
              <Typography variant="body1">Brand:{product?.brand}</Typography>
              <Typography variant="body1">
                Category: {product?.category}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetails;
