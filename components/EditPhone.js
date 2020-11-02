import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements'


export default function EditPhone({ navigation }) {
    const [phone, setPhone] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>What's your phone number?</Text>
            </View>
            <View style={styles.input}>
                <Input textContentType="telephoneNumber" maxLength={10} keyboardType='numeric' placeholder="(435)-435-4335" label="Phone Number" onChangeText={text => setPhone(text)} value={phone} />
                <Button
                    title="Update"
                    onPress={() => navigation.navigate('Profile', { phoneP: phone })}
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
    }
});