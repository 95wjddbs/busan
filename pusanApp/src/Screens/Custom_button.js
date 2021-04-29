import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const BtnFill = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonFill, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const BtnFillgray = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonFillgray, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

buttonFill: {
    display: 'flex',
    width: 70,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D7EBE',
},
buttonFill: {
    display: 'flex',
    width: 70,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D7EBE',
},
buttonFillgray: {
    display: 'flex',
    width: 70,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
},
text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
},
});