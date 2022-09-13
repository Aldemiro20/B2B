import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    LogBox
} from 'react-native';

import {AuthLayout} from "../"
import { FormInput, TextButton } from '../../components';
import { icons, SIZES,COLORS,FONTS } from '../../constants';
import {utils} from "../../utils"
const SignIn = ({navigation}) => {
    LogBox.ignoreAllLogs();
    const [email, setEmail]=React.useState('')
    const [password, setPassword]=React.useState('')
    const [emailError, setEmailError]=React.useState('')
    const [showPass, setShowPass]=React.useState(false)

    function isEnableSignIn(){
        return email!=""&&password!=""&&emailError==""
    }
    return (
       <AuthLayout
            title="Vamos fazer login"
            subtitle={"Seja bem vindo"}
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

                <FormInput 
                    label={"Senha"}
                    secureTextEntry={!showPass}
                    autoCompleteType={"password"}
                    containerStyle={{
                        marginTop:SIZES.radius
                    }}
                    onChange={(value)=>{setPassword(value)}}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width:40,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={()=>setShowPass(!showPass)}
                        >
                            <Image 
                                source={showPass?icons.eye_close:icons.eye}
                                style={{
                                    height:20,
                                    width:20,
                                    tintColor:COLORS.gray
                                }}
                            />

                        </TouchableOpacity>
                    }
                    

                />

            <View
                style={{
                   
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:SIZES.radius,
                }}
            >
                <TextButton 
                    label="Esqueceu a senha?"
                    buttonContainerStyle={{
                        backgroundColor:null
                    }}
                    labelStyle={{
                        color:COLORS.gray,
                        ...FONTS.body4
                    }}
                    onPress={()=>navigation.navigate("ForgotPassword")}
                />

            </View>

            <TextButton 
                    label="Entrar"
                    disabled={isEnableSignIn()?false:true}
                    buttonContainerStyle={{
                        height:55,
                        alignItems: "center",
                        marginTop:SIZES.radius,
                        borderRadius:SIZES.radius,
                        backgroundColor:isEnableSignIn()?COLORS.primary:
                        COLORS.transparentPrimray
                    }}
                   
                    onPress={()=>navigation.navigate("Drawer")}
                />

            <View
                style={{
                   
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        color:COLORS.darkGray,
                        ...FONTS.body3,
                    }}
                >
                    Não tem uma conta 

                </Text>
                <TextButton 
                    label="Cadastrar-se?"
                    buttonContainerStyle={{
                        marginLeft:3,
                        backgroundColor:null
                    }}
                    labelStyle={{
                        color:COLORS.primary,
                        ...FONTS.h3
                    }}
                    onPress={()=>navigation.navigate("SignUp")}
                />

            </View>
            </View>  
       </AuthLayout>
    )
}

export default SignIn;