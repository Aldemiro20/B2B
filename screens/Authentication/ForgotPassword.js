import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {AuthLayout} from "../"
import { FormInput, TextButton } from '../../components';
import { icons, SIZES,COLORS,FONTS } from '../../constants';
import {utils} from "../../utils"

const ForgotPassword = ({navigation}) => {
    const [email, setEmail]=React.useState('');
    const [emailError, setEmailError]=React.useState('')

    function isEnableSendEmail(){
        return email!=""&& emailError==""
    }
    return (
        <AuthLayout
            title="Recuperação de senha"
            subtitle={"Por favor, digite seu endereço de e-mail para recuperar sua senha"}
            titleContainerStyle={{ 
                marginTop:SIZES.padding*2
            }}
       >
            <View
                style={{ 
                    flex:1,
                    marginTop:SIZES.padding*2
                }} 
            >
                <FormInput 
                    label={"Email"}
                    keyboardType="email-address"
                    autoCompleteType={"email"}
                    onChange={(value)=>{
                        utils.validateEmail(value, setEmailError);
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{ 
                                justifyContent:'center'
                            }}
                        >
                            <Image 
                                source={email=="" ||(email!="" && emailError=="")?
                                icons.correct:icons.cancel}
                                style={{ 
                                    height:20,
                                    width:20,
                                    tintColor:email=="" ?
                                    COLORS.gray:(email!=""&& emailError=="")?COLORS.green:
                                    COLORS.red
                                }}
                            />

                        </View>
                    }

                />
            </View>
            <TextButton 
                    label="Enviar email"
                    disabled={isEnableSendEmail()?false:true}
                    buttonContainerStyle={{
                        height:55,
                        alignItems: "center",
                        marginTop:SIZES.radius,
                        borderRadius:SIZES.radius,
                        backgroundColor:isEnableSendEmail()?COLORS.primary:
                        COLORS.transparentPrimray
                    }}
                   
                    onPress={()=>navigation.navigate("SignIn")}
                />
        </AuthLayout>
    )
}

export default ForgotPassword;