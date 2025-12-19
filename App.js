import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CartProvider from './context/CartContext';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';

const App = () => {
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

export default App;
