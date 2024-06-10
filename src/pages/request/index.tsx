import { View } from "@tarojs/components";
import Content from "../index/components/content";
import Footer from "../index/components/footer";
import NavBar from "../index/components/navbar";


export default function RequestPage() {
    return (
        <View className="page">
            <NavBar></NavBar>
            <View className="px-[60px]">
                123
            </View>
            <View className="w-[100%] absolute bottom-0">
                <Footer></Footer>
            </View>
        </View>
    )
}