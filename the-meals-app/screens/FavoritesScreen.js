import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return(
            <View style={styles.content}>
                <DefaultText>No favourite meals found, start adding some!</DefaultText>
            </View>
        );
    }

    return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
    return {
            headerTitle: 'YOUR FAVOURITES!',
            headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='MENU' iconName='ios-menu' onPress={() => {
                        navData.navigation.toggleDrawer()
                    }} />
                </HeaderButtons>
            };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoriteScreen;