import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';


const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                keyExtractor={(item, index) => index.toString()}
                snapToAlignment={'start'}
                decelerationRate={'fast'} //speed of animation when scrolling
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;