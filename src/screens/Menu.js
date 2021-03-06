import React from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Gravatar } from 'react-native-gravatar'
import commonStyles from '../commonStyles'

export default props => {
    return (
            <DrawerContentScrollView {...props}>
                <Text style={styles.title} >Tasks</Text>
                <View style={styles.header}>
                    <Gravatar style={styles.avatar} 
                        options={{
                        email: props.email,
                        secure: true,}} 
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>
                            {props.name}
                        </Text>
                        <Text style={styles.email}>
                            {props.email}
                        </Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
    },
    userInfo: {
        marginLeft: 10,
    },
    name: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginBottom: 5,
        color: commonStyles.colors.mainText,
    },
    email: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        color: commonStyles.colors.subText,
        marginBottom: 10,
    },
})