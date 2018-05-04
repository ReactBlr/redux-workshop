export const transformGetCartItemsApi = data => ({
  byId: data.reduce(
    (obj, cartItem) => ({
      ...obj,
      [cartItem.id]: cartItem
    }),
    {}
  ),
  ids: data.map(cartItem => cartItem.id)
});
