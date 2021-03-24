import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "shoes", description: "Running shoes.", price: '$25', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
  { id: 2, name: "Laptop", description: "Apple Macbook pro.", price: '$10', image: 'https://images.pexels.com/photos/191158/pexels-photo-191158.jpeg?cs=srgb&dl=pexels-markus-spiske-191158.jpg&fm=jpg' },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
