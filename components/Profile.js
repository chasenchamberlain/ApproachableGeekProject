import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyAvatar from './Avatar'
import Inputs from './Inputs'

export default function Profile({ route, navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [link, setLink] = useState("");

    const { firstP, lastP, phoneP, emailP, bioP, linkP } = route.params;
    if (firstP !== firstName) {
        setFirstName(firstP);
    }
    else if (lastP !== lastName) {
        setLastName(lastP);
    }
    else if (phoneP !== phone) {
        setPhone(phoneP);
    }
    else if (emailP !== email) {
        setEmail(emailP);
    }
    else if (bioP !== bio) {
        setBio(bioP);
    }
    else if (linkP !== link) {
        setLink(linkP);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Edit Profile</Text>
            <MyAvatar link={link} />
            <View style={styles.inputs}>
                <Inputs firstName={firstName} lastName={lastName} phone={phone} email={email} bio={bio} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: '#2e78f0'
    },
    inputs: {
        marginLeft: 20,
        marginRight: 20,
    }
});