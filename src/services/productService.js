// Get list of products with optional search
export async function getProductList(searchTerm) {
  const api = import.meta.env.VITE_APP_DB_SERVER;
  const response = await fetch(`${api}/products?name_like=${searchTerm ?? ""}`);

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }

  const data = await response.json();

  // Optional extended filtering (e.g., match price too)
  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerSearch) ||
        item.price.toString().includes(searchTerm)
    );
  }

  return data;
}

// Get single product by ID
export const getProduct = async (id) => {
  const api = import.meta.env.VITE_APP_DB_SERVER;
  const response = await fetch(`${api}/products/${id}`);

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }

  return await response.json();
};

// Get featured products
export const getFeaturedList = async () => {
  const api = import.meta.env.VITE_APP_DB_SERVER;
  const response = await fetch(`${api}/featured_products`);

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }

  return await response.json();
};
