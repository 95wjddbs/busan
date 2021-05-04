import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Btn = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, isOn } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[isOn? styles.btn_on: styles.btn_off, style]}>
            <Text style={[isOn? styles.btn_on_text: styles.btn_off_text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const BtnOutlineWhite = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.Btext, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

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
    btn_off: {
        display: 'flex',
        width: 55,
        height: 25,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005baa',
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    btn_off_text: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#ffffff',
    },
    btn_on: {
        display: 'flex',
        width: 55,
        height: 25,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    btn_on_text: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#000000',
    },


    button: {
        display: 'flex',
        width: 70,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#5D7EBE',
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
    Btext: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#333333',
    },
});