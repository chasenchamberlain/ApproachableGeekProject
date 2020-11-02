import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default function EditEmail({ navigation }) {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>What's your email?</Text>
            </View>
            <View style={styles.input}>
                <Input placeholder="jane.doe@gmail.com" label="Email" onChangeText={text => setEmail(text)} value={email} />
                <Button
                    title="Update"
                    onPress={() => navigation.navigate('Profile', { emailP: email })}
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