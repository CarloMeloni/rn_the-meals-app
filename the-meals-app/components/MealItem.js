import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from './DefaultText';

const MealItem = props => {
    return(
        <View style={styles.MealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.MealRow, ...styles.MealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.MealRow, ...styles.MealDetail}}>
                        <DefaultText>{props.duration} Min</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    MealRow: {
        flexDirection: 'row'
    },
    MealHeader: {
        height: '85%'
    },
    MealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;