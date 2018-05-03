export const transformProductsApi = data => ({
  byId: data.reduce(
    (obj, product) => ({
      ...obj,
      [product.id]: product
    }),
    {}
  ),
  ids: data.map(product => product.id)
});
