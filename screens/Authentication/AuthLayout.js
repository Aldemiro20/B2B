import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated
} from 'react-native';
import { TextButton } from '../../components';
import {constants, images, FONTS, SIZES, COLORS} from "../../constants"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthLayout=({title, subtitle, titleContainerStyle, children})=>{
    return(
        <View
            style={{
                flex:1,
                paddingVertical:SIZES.padding,
                backgroundColor:COLORS.white,
            }}
        >
           <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flex:1,
                    paddingHorizontal:SIZES.padding,
                }}
           >
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Image 
                    source={images.logo_02}
                    resizeMode="contain"
                    style={{
                        height:100,
                        width:200
                    }}
                />

            </View>

            <View
                style={{
                    marginTop:SIZES.padding,
                    ...titleContainerStyle
                }}
            >
                <Text
                    style={{
                        textAlign:'center',
                        ...FONTS.h2
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        textAlign:'center',
                        color:COLORS.darkGray,
                        marginTop:SIZES.base,
                        ...FONTS.body3
                    }}
                >
                    {subtitle}
                </Text>

            </View>
            {children}
           </KeyboardAwareScrollView>
        </View>
    )
}

export default AuthLayout;