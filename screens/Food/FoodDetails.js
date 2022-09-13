import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    Animated
} from 'react-native';
import { HeaderSecundary, IconButton,TextButton,StepperInput} from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData} from "../../constants"

const FoodDetails = ({navigation}) => {
    const [foodItem, setFoodItem]=React.useState(dummyData.vegBiryani1);
    const [selectedSize, setSelectedSize]=React.useState("")
    const [qty, setQty]=React.useState(1)
    function renderHeader(){
        return(
            <HeaderSecundary 
                title="Detalhes"
                containerStyle={{
                    height:50,
                    marginHorizontal:SIZES.padding,
                    marginTop:40
                }}
                leftComponent={
                    <IconButton 
                        icon={icons.back}
                        containerStyle={{
                            width:40,
                            height:40,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth:1,
                            borderRadius:SIZES.radius,
                            borderColor:COLORS.gray2
                        }}
                        iconStyle={{
                            width:40,
                            height:40,
                            tintColor:COLORS.gray
                        }}
                        onPress={()=>navigation.goBack()}
                    />
                }
            />
        )
    }

    function renderDetails(){
        return(
            <View
            style={{
                marginTop:SIZES.radius,
                marginBottom:SIZES.padding,
                paddingHorizontal:SIZES.padding
               
            }}
           >
                <View
                    style={{
                        height:140,
                        borderRadius:15,
                        backgroundColor:COLORS.lightGray2
                    }}
                >
                  <Image 
                    source={foodItem?.image}
                    resizeMode="contain"
                    style={{
                        height:170,
                        width:"100%"
                    }}
                  />

                </View>

                <View style={{
                    marginTop:SIZES.padding
                }}>
                    <Text
                        style={{...FONTS.h1}}
                    >
                        {foodItem?.name}
                        
                    </Text>

                    <Text
                        style={{
                            ...FONTS.body3,
                            marginTop:SIZES.base,
                            color:COLORS.darkGray,
                            textAlign:"justify"

                        }}
                    >
                        {foodItem?.description}
                        
                    </Text>
                    <View style={{
                        flexDirection:'row',
                        marginTop:SIZES.padding,
                        alignItems: 'center'
                    }}>
                        <Text style={{...FONTS.h3}}>
                            Tamanhos
                        </Text>
                        <View style={{
                            flexDirection:'row',
                            flexWrap:'wrap',
                            marginLeft:SIZES.padding
                        }}>
                            {dummyData.sizes.map((item, index)=>{
                                return(
                                    <TextButton 
                                        key={`Sizes-${item.id}`}
                                        buttonContainerStyle={{
                                            width:55,
                                            height:55,
                                            margin:SIZES.base,
                                            borderWidth:1,
                                            borderRadius:SIZES.radius,
                                            borderColor:selectedSize==item.id?COLORS.primary: COLORS.gray2,
                                            backgroundColor:selectedSize==item.id?COLORS.primary:null
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color:selectedSize==item.id?COLORS.white: COLORS.gray2,
                                            ...FONTS.body2
                                        }}
                                        onPress={()=>setSelectedSize(item.id)}
                                    />
                                )
                            })}

                        </View>

                    </View>

                </View>

           </View>  
        )
    }
    function renderFooter(){
        return(
            <View
            style={{
                flexDirection:'row',
                height: 120,
                alignItems: 'center',
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.radius
               
            }}
           >
                <StepperInput 
                value={qty}
                onAdd={()=>setQty(qty+1)}
                onMinus={()=>{
                    if(qty>1){
                        setQty(qty-1);
                    }
                }}
                />
                <TextButton 
                    buttonContainerStyle={{
                        flex:1,
                        flexDirection: 'row',
                        height:60,
                        marginLeft:SIZES.radius,
                        paddingHorizontal:SIZES.radius,
                        borderRadius:SIZES.radius,
                        backgroundColor:COLORS.primary
                    }}
                    label="Comprar"
                    label2="4000kz"
                    onPress={()=>navigation.navigate("CartTab")}
                />
           </View>

        )
    }
    return (
        <View
        style={{
            flex: 1,
           backgroundColor:COLORS.white
        }}
    >
        {renderHeader()}
        <ScrollView>
            {renderDetails()}
        </ScrollView>
        {renderFooter()}
    </View>
    )
}

export default FoodDetails