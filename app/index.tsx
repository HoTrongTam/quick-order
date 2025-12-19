import React from 'react';
import { SafeAreaView } from 'react-native';
import CartSummary from '../components/CartSummary';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';
import CartProvider from '../context/CartContext';

const Page: React.FC = () => {
  return (
    <CartProvider>
      <SafeAreaView>
        <FilterBar />
        <ProductList />
        <CartSummary />
      </SafeAreaView>
    </CartProvider>
  );
};

export default Page;