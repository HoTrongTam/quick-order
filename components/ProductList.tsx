import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';
import { CartContext } from '../context/CartContext';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
    const { filteredProducts } = useContext(CartContext);
    const products = filteredProducts();

    return (
        <ScrollView>
            {products.length > 0 ? (
                products.map((product) => <ProductItem key={product.id} product={product} />)
            ) : (
                <Text>No products found</Text>
            )}
        </ScrollView>
    );
};

export default ProductList;
