import React, { Component } from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, View } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>TaskList</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    background: {
        flexGrow: 3
    },
    taskList: {
        flexGrow: 7
    },
});