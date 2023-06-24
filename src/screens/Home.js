import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {


    return (
        <View style={{ backgroundColor: '#130f40', height: '100%' }}>
            <View style={{ marginTop: 150, }}>
                <Image source={require('../../assets/play.jpg')} style={{ width: 350, marginHorizontal: 35, borderRadius: 10, resizeMode: 'contain', height: 100 }} />
            </View>
            <View style={{ position: 'relative' }}>
                <Text style={{ color: '#7ed6df', top: 180, left: 90, fontSize: 30 }}>Its Ak Quiz App</Text>
            </View>
            <View style={{ marginTop: 300, }}>
                <Image source={require('../../assets/letPlay.jpg')} style={{ width: 350, marginHorizontal: 35, borderRadius: 10, resizeMode: 'contain', height: 100 }} />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('PlayGround')}


                style={{ color: 'white', marginTop: 100, marginHorizontal: 100, backgroundColor: '#7ed6df', borderRadius: 20 }}>
                <Text style={{ color: '#8e44ad', padding: 20, fontSize: 26, textAlign: 'center', }}>Play Now</Text>
            </TouchableOpacity>
            <StatusBar
                style='light'
            />
        </View>


    )
}

export default Home

