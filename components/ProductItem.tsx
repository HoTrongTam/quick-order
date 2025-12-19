import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { CartContext } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  isPrescription: boolean;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
        <Text>{product.name}</Text>
        <Text>{product.category}</Text>
        <Text>{product.price} VND</Text>
        {/* install react native badge package and use it here */}
        {/* {product.isPrescription && <Badge>Rx</Badge>} */}
      </View>
      <Button title="+" onPress={() => addToCart(product)} />
      <Button title="-" onPress={() => removeFromCart(product)} />
    </View>
  );
};

export default ProductItem;
