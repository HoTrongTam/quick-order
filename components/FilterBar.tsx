import React, { useContext } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { CartContext } from '../context/CartContext';

const FilterBar: React.FC = () => {
    const { setSearch, setFilter } = useContext(CartContext);

    return (
        <View style={styles.filterContainer}>
            <TextInput
                placeholder="Search products"
                onChangeText={(text) => setSearch(text)}
                style={{ borderWidth: 1, marginBottom: 10 }}
            />
            <Button title="All" onPress={() => setFilter('All')} />
            <Button title="Pain Relief" onPress={() => setFilter('Pain Relief')} />
            <Button title="Antibiotic" onPress={() => setFilter('Antibiotic')} />
            <Button title="Supplement" onPress={() => setFilter('Supplement')} />
            <Button title="Allergy" onPress={() => setFilter('Allergy')} />
        </View>
    );
};

export default FilterBar;
const styles = StyleSheet.create({
    filterContainer: {
        padding: 10
    }
})