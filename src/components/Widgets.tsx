import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { WidgetsStyle } from '../styles';

const Widgets = (props: any) => {
    const { widgetsChild, WidgetsName } = props;
    return (
        <TouchableOpacity style={WidgetsStyle.cardWrapStyle}>
            {widgetsChild}
            <Text style={WidgetsStyle.widgetsNameStyle}>{WidgetsName}</Text>
        </TouchableOpacity>
    )
}

export default Widgets