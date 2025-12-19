import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  isPrescription: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
  filteredProducts: () => Product[];
  filter: string;
  totalQuantity: number;
  totalAmount: number;
  totalItems: number;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      if (productIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      if (productIndex > -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[productIndex].quantity > 1) {
          updatedCart[productIndex].quantity -= 1;
        } else {
          updatedCart.splice(productIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  const filteredProducts = () => {
    return products.filter((product) => {
      return (
        (filter === 'All' || product.category === filter) &&
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  const products: Product[] = [
    { id: 1, name: 'Paracetamol 500mg', price: 15000, category: 'Pain Relief', isPrescription: false },
    { id: 2, name: 'Amoxicillin 500mg', price: 45000, category: 'Antibiotic', isPrescription: true },
    { id: 3, name: 'Vitamin C 1000mg', price: 30000, category: 'Supplement', isPrescription: false },
    { id: 4, name: 'Cetirizine 10mg', price: 20000, category: 'Allergy', isPrescription: false },
  ];

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setFilter,
        setSearch,
        filteredProducts,
        filter,
        totalQuantity,
        totalAmount,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
