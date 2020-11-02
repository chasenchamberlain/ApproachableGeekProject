import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default function EditName({ navigation }) {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>What's your name?</Text>
            </View>
            <View style={styles.input}>
                <Input placeholder="First" label="First Name" onChangeText={text => setFirst(text)} value={firstName} />
                <Input placeholder="Last" label="Last Name" onChangeText={text => setLast(text)} value={lastName} />
                <Button
                    title="Update"
                    onPress={() => navigation.navigate('Profile', { firstP: firstName, lastP: lastName })}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        padding: 10,
    },
    text: {
        fontSize: 40,
        textAlign: 'center'
    },
    input: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
});