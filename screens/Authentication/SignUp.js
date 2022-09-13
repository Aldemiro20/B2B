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

const SignUp = ({navigation}) => {
    const [email, setEmail]=React.useState('')
    const [password, setPassword]=React.useState('')
    const [username, setUsername]=React.useState('')

    const [emailError, setEmailError]=React.useState('')
    const [passwordError, setPasswordError]=React.useState('')
    const [usernameError, setUsernameError]=React.useState('')
    const [showPass, setShowPass]=React.useState(false)


    function isEnableSignUp(){
        return email!=""&& username!=""&&password!=""&&emailError==""&&
        emailError=="" && passwordError=="" && usernameError==""
    }

    return (
        <AuthLayout
            title="Começando"
            subtitle={"Crie uma conta"}
       >
            <View
                style={{ 
                    flex:1,
                    marginTop:SIZES.padding
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
                    label={"Nome de usuário"}
                    containerStyle={{
                        marginTop:SIZES.radius
                    }}
                    onChange={(value)=>{
                        setUsername(value);
                    }}
                    errorMsg={usernameError}
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
                                    tintColor:username=="" ?
                                    COLORS.gray:(username!=""&& usernameError=="")?COLORS.green:
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
                    onChange={(value)=>{
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width:40,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={()=>{
                                setShowPass(!showPass)
                            }}
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
                <TextButton 
                    label="Cadastrar"
                    disabled={isEnableSignUp()?false:true}
                    buttonContainerStyle={{
                        height:55,
                        alignItems: "center",
                        marginTop:SIZES.radius,
                        borderRadius:SIZES.radius,
                        backgroundColor:isEnableSignUp()?COLORS.primary:
                        COLORS.transparentPrimray
                    }}
                   
                    onPress={()=>navigation.navigate("SignIn")}
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
                    já tem uma conta?
                </Text>
                <TextButton 
                    label="Fazer login"
                    buttonContainerStyle={{
                        backgroundColor:null
                    }}
                    labelStyle={{
                        color:COLORS.primary,
                        ...FONTS.h3
                    }}
                    onPress={()=>navigation.goBack()}
                />

            </View>
            </View>
            </AuthLayout>
    )
}

export default SignUp;