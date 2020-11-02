// this is all from https://docs.expo.io/versions/latest/sdk/imagepicker/, I cleaned up some words and formatting

import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Pick an image from device" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button style={styles.button}
                title="Update"
                onPress={() => navigation.navigate('Profile', { linkP: image })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200
    },
    button: {
        padding: 20
    }
});