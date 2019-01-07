'use strict';

import { StyleSheet } from 'react-native';

const PADDING = 5;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const CONSTANT = require('../../constant');

export default StyleSheet.create({

    overlayStyle: {
        flex:            1,
        padding:         '5%',
        justifyContent:  'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },

    optionContainer: {
        borderRadius:    BORDER_RADIUS,
        flexShrink:      1,
        marginBottom:    8,
        padding:         PADDING,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },

    cancelContainer: {
        alignSelf: 'stretch',
    },

    selectStyle: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        borderRadius: BORDER_RADIUS,
    },

    selectTextStyle: {
        fontSize:  CONSTANT.TEXTINPUT_FONT,
        color: 'black'
    },

    cancelStyle: {
        borderRadius:    BORDER_RADIUS,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding:         PADDING,
    },

    cancelTextStyle: {
        alignSelf: 'center',
        fontSize:  CONSTANT.TEXTINPUT_FONT,
    },

    optionStyle: {
        padding:           PADDING,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    optionTextStyle: {
        textAlign: 'center',
        fontSize:  CONSTANT.TEXTINPUT_FONT,
        color:     HIGHLIGHT_COLOR,
    },

    sectionStyle: {
        padding:           PADDING * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    sectionTextStyle: {
        textAlign: 'center',
        fontSize:  CONSTANT.TEXTINPUT_FONT,
    },
});
