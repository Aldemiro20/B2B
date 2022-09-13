import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData

} from "../constants"

const HorizontalFoodCard=({containerStyle, imageStyle, item, onPress})=>{
    return (
        <TouchableOpacity
        style={{
            flexDirection:'row',
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.lightGray2,
            ...containerStyle
        }}
        onPress={onPress}
        >
            <Image 
                source={item.image}
                style={imageStyle}
           />
           <View style={{flex:1}}>
            <Text style={{...FONTS.h3, fontSize:17}}>
                    {item.name}
            </Text>
            <Text style={{color:COLORS.darkGray2, ...FONTS.body4}}>
                    {item.description}
            </Text>
            <Text style={{marginTop:SIZES.base, ...FONTS.h2}}>
                    Kz{item.price}
            </Text>
           </View>
        </TouchableOpacity>
    )
}

export default HorizontalFoodCard