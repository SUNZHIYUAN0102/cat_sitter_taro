import { View, Image, Text, Button } from "@tarojs/components";
import main from "@/resources/main.jpg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Taro from "@tarojs/taro";


const Content: React.FC = () => {
    const user = useSelector((state: RootState) => state.user)

    const toRequestPage = () => {
        Taro.redirectTo({
            url: 'pages/request/index'
        })
    }

    return <View>
        <View className="w-[100%] h-[400px] relative">
            <Image className="w-[100%] h-[100%]" src={main}></Image>
            <View className="absolute p-[10px] rounded-md w-[300px] right-[30px] top-[55px] backdrop-blur-[8px]">
                {user.token && <Button onClick={toRequestPage} className="w-[180px] px-[10px] mb-[30px] bg-orange-600 rounded-sm text-white text-[18px] cursor-pointer">
                    Find a sitter
                </Button>}

                <View className="font-['Josefin_Sans'] text-orange-600 font-bold">PurrSitters: Expert Cat Sitting Services</View>

                <View className="text-[8px]">
                    Welcome to PurrSitters, where your cat's comfort and care come first! Whether you're traveling, busy at work, or just need a little extra help, our professional cat sitters are here to ensure your feline friend receives the best possible care in your absence. With our passion for cats and commitment to their wellbeing, we provide a loving and safe environment tailored to meet the unique needs of each kitty. Trust us to be your cat's second family; we're devoted to making every moment joyous and stress-free for them. Experience peace of mind with our reliable, affectionate, and expert cat sitting services—because your cat deserves nothing less.
                </View>
            </View>
        </View>
    </View>
}

export default Content;