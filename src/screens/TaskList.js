import React, { Component } from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'

import Task from '../components/Task'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

export default class TaskList extends Component {
    state = {
        showDoneTasks: true,
        tasks: [{
            id: Math.random(),
            desc: 'Tarefa #01',
            estimateAt: new Date(),
            doneAt: new Date(),
        }, {
            id: Math.random(),
            desc: 'Tarefa #02',
            estimateAt: new Date(),
            doneAt: null,
        }]
    }

    tooggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks })
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = (task.doneAt ? null : new Date())
            }
        })

        this.setState({ tasks })
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                    <View  style={styles.iconBar}>
                        <TouchableOpacity onPress={this.tooggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                  size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.tasks}
                              keyExtractor={item => `${item.id}`}
                              renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask}/>} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: 30,
    },
});