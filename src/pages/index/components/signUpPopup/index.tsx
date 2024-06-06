import Popup from "@/components/popup";
import { Input, View, Text } from "@tarojs/components";
import React from "react";


interface SignUpPopupProps {
    visible: boolean;
    handlePopup: (visible: boolean) => void;
}

const SignUpPopup: React.FC<SignUpPopupProps> = ({ visible, handlePopup }) => {
    return <Popup visible={visible} handlePopup={handlePopup}>
        <View className='flex flex-col items-center gap-[15px]'>
            <Text className="text-orange-400 text-[25px] font-bold font-['Pacifico']">Sign Up</Text>

            <Input className='w-[200px] border-[0.5px] border-neutral-200 rounded-md p-[5px] text-[8px]' placeholder='Username'></Input>
            <Input className='w-[200px] border-[0.5px] border-neutral-200 rounded-md p-[5px] text-[8px]' placeholder='Email'></Input>
            <Input password className='w-[200px] border-[0.5px] border-neutral-200 rounded-md p-[5px] text-[8px]' placeholder='Password'></Input>
            <Input password className='w-[200px] border-[0.5px] border-neutral-200 rounded-md p-[5px] text-[8px]' placeholder='Confirm Password'></Input>

            <View className="w-[100px] py-[6px] rounded-lg bg-orange-600 flex justify-center items-center text-white text-[10px] cursor-pointer">
                Sign Up
            </View>
        </View>
    </Popup>
}

export default SignUpPopup;