import { View, Image, Text } from "@tarojs/components";
import icon from "@/resources/icon.svg"
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SignInPopup from "../signInPopup";
import SignUpPopup from "../signUpPopup";
import { useState } from "react";
import Taro from "@tarojs/taro";
import { initialDB } from "@/apis/seed";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
    const user = useSelector((state: RootState) => state.user)

    const [signInPopupVisible, setSignInPopupVisible] = useState(false)
    const [signUpPopupVisible, setSignUpPopupVisible] = useState(false)

    const RenderUserPart = (): JSX.Element => {
        if (user.token) {
            return <View className="flex items-center gap-[5px] cursor-pointer">
                <Image mode="aspectFill" className="w-[30px] h-[30px] rounded-full" src={user.avatar}></Image>
                <Text className="text-[10px] hover:text-neutral-500 transition-all">{user.name}</Text>
            </View>
        } else {
            return <View className="flex items-center gap-[5px]">
                <View className="p-[5px] rounded-sm text-[8px] leading-[1] hover:bg-neutral-200 transition-all cursor-pointer" onClick={() => { setSignInPopupVisible(true) }}>
                    Sign In
                </View>

                <View className="p-[5px] rounded-sm bg-orange-400 text-white text-[8px] leading-[1] hover:bg-orange-500 transition-all cursor-pointer" onClick={() => { setSignUpPopupVisible(true) }}>
                    Sign Up
                </View>
            </View>
        }
    }

    const toMainPage = () => {
        Taro.reLaunch({
            url: '/pages/index/index'
        })
    }

    const handleDBInit = async () => {
        try {
            let res = await initialDB()

            console.log(res.data);
        } catch (e) {
            console.log(e)
        }
    }

    return <View className="sticky top-0 w-[100%] h-[50px] bg-white px-[10%] flex justify-between items-center z-50">
        <Image onClick={toMainPage} className="w-[110px] h-[25px] cursor-pointer" src={icon}></Image>

        <View className="flex items-center gap-[20px]">
            <View className="mx-[20px] flex items-center gap-[15px] text-[10px] text-neutral-700">
                <Text className="font-['Pacifico'] hover:text-neutral-500 transition-all cursor-pointer">How it works</Text>
                <Text className="font-['Pacifico'] hover:text-neutral-500 transition-all cursor-pointer">Blog</Text>
                <Text className="font-['Pacifico'] hover:text-neutral-500 transition-all cursor-pointer">FAQ</Text>
                <Text className="font-['Pacifico'] hover:text-neutral-500 transition-all cursor-pointer">About Us</Text>
                <Text className="font-['Pacifico'] hover:text-neutral-500 transition-all cursor-pointer">Contact</Text>
                <Text onClick={handleDBInit} className="font-['Pacifico'] hover:text-neutral-500 transition-all cursor-pointer">Initial DB</Text>
            </View>
        </View>

        {RenderUserPart()}

        <SignInPopup visible={signInPopupVisible} handlePopup={setSignInPopupVisible}></SignInPopup>
        <SignUpPopup visible={signUpPopupVisible} handlePopup={setSignUpPopupVisible}></SignUpPopup>
    </View>
}

export default NavBar;