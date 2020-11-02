import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default function EditEmail({ navigation }) {
    const [bio, setBio] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Tell a little about yourself.</Text>
            </View>
            <View style={styles.input}>
                <Input placeholder="yadda yadda yadda..." label="Bio" onChangeText={text => setBio(text)} value={bio} />
                <Button
                    title="Update"
                    onPress={() => navigation.navigate('Profile', { bioP: bio })}
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
        padding: 20,
        alignItems: 'center'
    },
});