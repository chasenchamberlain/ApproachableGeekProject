import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


const MyAvatar = (props) => {
    const navigation = useNavigation();
    var link = 'https://miro.medium.com/max/700/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';
    if (props.link !== '') {
        link = props.link;
    }
    return (
        <View style={styles.container} >
            <Avatar
                rounded
                containerStyle={styles.pic}
                size="xlarge"
                source={{
                    uri: link,
                }}
                onPress={() => navigation.navigate('Upload a photo')}
            >
                <Accessory size={30} />
            </Avatar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    pic: {
        borderWidth: 5,
        borderColor: '#2e78f0',
        borderStyle: 'solid'
    },

});

export default MyAvatar