import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default PostScreen = () => {
    return (
        <View style={styles.center}>
            <Text>PostScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})