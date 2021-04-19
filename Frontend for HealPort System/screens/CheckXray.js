import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CheckXray = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={styles.cover}>
                <Image
                    source={require('../Images/checkXray-1.png')}
                    style={{ width: 400, height: 400, alignItems: 'center', justifyContent: 'center', marginTop: 150, }}
                />
            </View>
        </View>
    )
}

export default CheckXray

const styles = StyleSheet.create({
    cover: {

        alignItems: 'center',
        justifyContent: 'center',


    },
})
