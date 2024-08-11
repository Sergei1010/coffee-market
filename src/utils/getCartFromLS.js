export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const itemsLS = data ? JSON.parse(data) : [];
  const priceLS = data
    ? itemsLS.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0)
    : 0;
  const countLS = data
    ? itemsLS.reduce((sum, item) => {
        return sum + item.count;
      }, 0)
    : 0;
  return { itemsLS, priceLS, countLS };
};
