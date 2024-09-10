import { View, Text } from 'react-native'
import React from 'react'
import { CardStyle } from '../styles'

const Card = (props: any) => {
    const { dorctorNameOne, dorctorNameTwo, iconChild, count, showDoctorCard, discription } = props;
    return (
        <View style={CardStyle.cardWrapStyle}>
            {showDoctorCard ? <>
                <Text style={CardStyle.doctorNameStyle}>{dorctorNameOne}</Text>
                <Text style={CardStyle.doctorNameStyle}>{dorctorNameTwo}</Text>
            </> :
                <Text style={CardStyle.doctorNameStyle}>{discription}</Text>

            }
            <View style={CardStyle.countBoxStyle}>
                {iconChild}
                <Text style={CardStyle.countStyle}>{count}</Text>
            </View>
        </View>
    )
}

export default Card