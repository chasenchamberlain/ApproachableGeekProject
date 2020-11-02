import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const Inputs = (props) => {
    const navigation = useNavigation();

    var firstAndLast = ""
    if (props.firstName !== "" || props.lastName !== "") {
        firstAndLast = props.firstName + " " + props.lastName;
    }

    return (
        <View>
            <Pressable onPress={() => navigation.navigate('Name')}>
                <Input
                    value={firstAndLast}
                    placeholder="Enter your name"
                    label="Name"
                    editable={false}
                    rightIcon={<Icon name='arrow-right' type='simple-line-icon' />}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Phone')}>
                <Input
                    value={props.phone}
                    placeholder="Enter your phone number"
                    label="Phone"
                    editable={false}
                    rightIcon={<Icon name='arrow-right' type='simple-line-icon' />}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Email')}>
                <Input
                    value={props.email}
                    placeholder="Enter your email"
                    label="Email"
                    editable={false}
                    rightIcon={<Icon name='arrow-right' type='simple-line-icon' />}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Bio')}>
                <Input
                    value={props.bio}
                    placeholder="Blurb about yourself"
                    label="Tell us about yourself"
                    rightIcon={<Icon name='arrow-right' type='simple-line-icon' />}
                    editable={false}
                    multiline={true}
                // numberOfLines={3}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
});

export default Inputs

