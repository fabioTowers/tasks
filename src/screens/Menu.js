import React from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Gravatar } from 'react-native-gravatar'

export default props => {
    return (
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <Gravatar style={styles.avatar} 
                        options={{
                        email: props.email,
                        secure: true,}} 
                    />
                    <View style={styles.userInfo}>
                        <Text>{props.name}</Text>
                        <Text>{props.email}</Text>
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
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        marginTop: Platform.OS === 'ios' ? 50 : 10,
    }
})