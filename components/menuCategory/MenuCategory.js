import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const MenuCategory = ({setType}) => {
    const [active, setActive] = useState(1);

    const handlePress = (data) => {
        setActive(data);
    };
    return (
        <ScrollView
            className=""
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity onPress={() => {handlePress(1);setType('pizza')}} className="-mt-1 w-24  mx-3 rounded-lg">
                <Text
                    className={
                        active === 1
                            ? 'bg-red-600 rounded-lg text-white px-3 py-2 text-base text-center font-semibold'
                            : ' rounded-lg text-black px-3 py-2 text-base text-center font-semibold'
                    }
                >
                    Pizza
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {handlePress(2);setType('pasta')}} className="-mt-1 w-24  mx-3 rounded-lg">
                <Text
                    className={
                        active === 2
                            ? 'bg-red-600 rounded-lg text-white px-3 py-2 text-base text-center font-semibold'
                            : ' rounded-lg text-black px-3 py-2 text-base text-center font-semibold'
                    }
                >
                    Mì Ý
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {handlePress(3);setType('sides')}} className="-mt-1 w-24  mx-3 rounded-lg">
                <Text
                    className={
                        active === 3
                            ? 'bg-red-600 rounded-lg text-white px-3 py-2 text-base text-center font-semibold'
                            : ' rounded-lg text-black px-3 py-2 text-base text-center font-semibold'
                    }
                >
                    Món Phụ
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {handlePress(4);setType('dessert')}} className="-mt-1 w-32  mx-3 rounded-lg">
                <Text
                    className={
                        active === 4
                            ? 'bg-red-600 rounded-lg text-white px-3 py-2 text-base text-center font-semibold'
                            : ' rounded-lg text-black px-3 py-2 text-base text-center font-semibold'
                    }
                >
                    Tráng miệng
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {handlePress(5);setType('drinks')}} className="-mt-1 w-28  mx-3 rounded-lg">
                <Text
                    className={
                        active === 5
                            ? 'bg-red-600 rounded-lg text-white px-3 py-2 text-base text-center font-semibold'
                            : ' rounded-lg text-black px-3 py-2 text-base text-center font-semibold'
                    }
                >
                    Nước uống
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default MenuCategory;
