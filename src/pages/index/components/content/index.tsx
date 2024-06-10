import { View, Image, Text } from "@tarojs/components";
import main from "@/resources/main.jpg";


const Content: React.FC = () => {
    return <View>
        <View className="w-[100%] h-[400px] relative">
            <Image className="w-[100%] h-[100%]" src={main}></Image>
            <View className="absolute p-[10px] rounded-md w-[300px] right-[30px] top-[95px] backdrop-blur-[8px]">
                <View className="font-['Josefin_Sans'] text-orange-600 font-bold">PurrSitters: Expert Cat Sitting Services</View>

                <View className="text-[8px]">
                    Welcome to PurrSitters, where your cat's comfort and care come first! Whether you're traveling, busy at work, or just need a little extra help, our professional cat sitters are here to ensure your feline friend receives the best possible care in your absence. With our passion for cats and commitment to their wellbeing, we provide a loving and safe environment tailored to meet the unique needs of each kitty. Trust us to be your cat's second family; we're devoted to making every moment joyous and stress-free for them. Experience peace of mind with our reliable, affectionate, and expert cat sitting services—because your cat deserves nothing less.
                </View>
            </View>
        </View>

        <View className="w-[100%] px-[20px] py-[10px] bg-orange-400">
            <Text className="text-white text-[10px]">@Made with love 2024 ♥</Text>
        </View>
    </View>
}

export default Content;