import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';


const FilterSwitch = props => {
    return(<View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                    trackColor={{true: Colors.primary}}
                    thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
                    value={props.state} 
                    onValueChange={props.onChange} />
            </View>);
};


const FilterScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    }, [saveFilters]);

    return(<View style={styles.screen}>
        <Text style={styles.title}>Available filters / restriction</Text>
        <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
        <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
        <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />
        <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
    </View>);
};

FilterScreen.navigationOptions = (navData) => {
    return {
            headerTitle: 'Filter Meals',
            headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='MENU' iconName='ios-menu' onPress={() => {
                        navData.navigation.toggleDrawer()
                    }} />
                </HeaderButtons>),
            headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='SAVE' iconName='ios-save' onPress={navData.navigation.getParam('save')} />
            </HeaderButtons>),
            };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterScreen;