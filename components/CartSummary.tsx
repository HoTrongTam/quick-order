import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartSummary: React.FC = () => {
    const { totalQuantity, totalAmount, totalItems } = useContext(CartContext);

    return (
        <View style={styles.summaryContainer}>
            <Text>Total SKUs: {totalItems}</Text>
            <Text>Total Quantity: {totalQuantity}</Text>
            <Text>Total Amount: {totalAmount} VND</Text>
        </View>
    );
};

export default CartSummary;

const styles = StyleSheet.create({
    summaryContainer: {
        padding: 10, backgroundColor: '#f8f8f8'
    }
});