import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
                    title={itemData.item.title} 
                    color={itemData.item.color}
                    onSelect={() => {
                        props.navigation.navigate({
                                routeName: 'CategoryMeals', 
                                params: {
                                    CategoryId: itemData.item.id
                        }
                    });
                    }} />;
    };

    return(
    <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='MENU' iconName='ios-menu' onPress={() => {
                        navData.navigation.toggleDrawer()
                    }} />
                </HeaderButtons>
}; 
};
    



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;