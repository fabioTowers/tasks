import React, { Component } from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, View } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text>Hoje</Text>
                        <Text>{today}</Text>
                    </View>
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
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
});