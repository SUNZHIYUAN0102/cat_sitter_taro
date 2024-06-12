import { View, Text, Input, Image } from "@tarojs/components";
import Footer from "../index/components/footer";
import NavBar from "../index/components/navbar";
import Taro from "@tarojs/taro";

export default function RequestPage() {

    const toRequestDetailPage = () => {
        Taro.redirectTo({
            url: 'pages/requestDetail/index'
        })
    }

    return (
        <View className="page">
            <NavBar></NavBar>
            <View style={{ background: "#f4f4f4" }} className="py-[20px] flex justify-center">
                <View className="w-[450px] rounded border border-orange-500 py-[10px] px-[30px] flex flex-col items-center gap-[10px]">
                    <Text className="font-['Pacifico'] text-[20px] font-bold">Find A Sitter</Text>

                    <View className="w-[100%] flex flex-col gap-[5px]">
                        <Text className="text-[15px]">Date:</Text>
                        <Input className='w-[200px] border-[0.5px] border-orange-400 bg-white rounded-md p-[5px] text-[8px]' />
                    </View>

                    <View className="w-[100%] flex flex-col gap-[5px]">
                        <Text className="text-[15px]">My Cats:</Text>
                        <View className="flex flex-wrap gap-[5px]">
                            <View style={{ borderColor: "#EC974F" }} className="w-[40px] h-[40px] rounded-full overflow-hidden border border-transparent">
                                <Image mode="aspectFill" className="w-[100%] h-[100%]" src="https://picsum.photos/id/40/40/40"></Image>
                            </View>
                            <View className="w-[40px] h-[40px] rounded-full overflow-hidden border border-transparent">
                                <Image mode="aspectFill" className="w-[100%] h-[100%]" src="https://picsum.photos/id/40/40/40"></Image>
                            </View>
                            <View className="w-[40px] h-[40px] rounded-full overflow-hidden border border-transparent">
                                <Image mode="aspectFill" className="w-[100%] h-[100%]" src="https://picsum.photos/id/40/40/40"></Image>
                            </View>
                            <View className="w-[40px] h-[40px] rounded-full overflow-hidden border border-transparent">
                                <Image mode="aspectFill" className="w-[100%] h-[100%]" src="https://picsum.photos/id/40/40/40"></Image>
                            </View>
                        </View>
                    </View>

                    <View className="w-[100%] flex flex-col gap-[5px]">
                        <Text className="text-[15px]">Available Services:</Text>
                        <View className="flex flex-wrap gap-[5px]">
                            <View style={{ background: "#EC974F", color: "white" }} className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                            <View className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                            <View className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                            <View className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                            <View className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                            <View className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                            <View className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                            <View className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">Feed Cat</View>
                        </View>
                    </View>

                    <View className="w-[100%] flex items-center gap-[5px]">
                        <Text className="text-[15px]">Price:</Text>
                        <Text className="text-[20px] text-orange-400">$38.78</Text>
                    </View>

                    <View className="w-[100%] flex justify-center">
                        <View onClick={toRequestDetailPage} className="bg-orange-400 p-[8px] rounded-lg text-white text-[12px] font-bold cursor-pointer">
                            Submit Request
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}