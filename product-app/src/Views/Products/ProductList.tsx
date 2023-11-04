import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Theme from "../../theme/Theme";
import { fetchProducts } from "../../services/productAPI";
import { Link } from "react-router-dom";

const ProductList = () => {
  const downSM = useMediaQuery(Theme.breakpoints.down("sm"));
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const filteredProducts = products.filter((product: any) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Container>
        <Grid container spacing={2} paddingY={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Product List</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Search Products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <List>
              {filteredProducts?.map((product: any) => (
                <ListItem key={product.id}>
                  <ListItemButton
                    component={Link}
                    to={`/product/${product.id}`}
                  >
                    {product.title}
                  </ListItemButton>
                  <ListItemSecondaryAction>
                    {downSM ? (
                      <DeleteIcon color="error" />
                    ) : (
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        color="error"
                      >
                        Delete
                      </Button>
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
