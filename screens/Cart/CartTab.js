import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import { Header, IconButton,TextButton,StepperInput} from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData} from "../../constants"
import {SwipeListView} from "react-native-swipe-list-view"

const CartTab = ({navigation}) => {
    const [myCartList, setMyCartList]=React.useState(dummyData.myCart)

    function renderCartList(){
        return(
            <SwipeListView 
                data={myCartList}
                keyExtractor={item=>`${item.id}`}
                contentContainerStyle={{
                    marginTop:SIZES.radius,
                    paddingHorizontal:SIZES.padding,
                    paddingBottom:SIZES.padding*2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap)=>{
                    <View
                        style={{
                            height:100,
                            backgroundColor:COLORS.lightGray2
                        }}
                    >
                        <Text>{data.item.name}</Text>
                    </View>
                }}
            />
        )
    }
    return (
        <View
            style={{
                flex: 1,
               backgroundColor:COLORS.white,
               alignItems: 'center',
                 justifyContent: 'center'
            }}
        >
            <Text>Carrinho</Text>
        </View>
    )
}

export default CartTab