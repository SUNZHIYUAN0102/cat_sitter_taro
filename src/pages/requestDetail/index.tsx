import { View, Text, Image, ScrollView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import NavBar from '../index/components/navbar'
import Taro from '@tarojs/taro'

export default function RequestDetailPage() {

  const toOrderPage = () => {
    Taro.redirectTo({
      url: 'pages/order/index'
    })
  }

  return (
    <View className="page">
      <NavBar></NavBar>
      <View style={{ background: "#f4f4f4" }} className="py-[20px] flex justify-center">
        <View className='flex items-start gap-[20px]'>
          <View className='w-[450px] p-[20px] bg-white rounded-md flex flex-col items-center gap-[10px] shadow'>
            <View className='font-bold text-[22px]'>Request Detail</View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Date:</Text>
              <Text className='text-[12px]'>2021-10-10</Text>
            </View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Cats:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
              </View>
            </View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Services:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                <View className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">Feed Cat</View>
                <View className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">Feed Cat</View>
                <View className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">Feed Cat</View>
                <View className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">Feed Cat</View>
                <View className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">Feed Cat</View>
              </View>
            </View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Price:</Text>
              <Text className='text-[12px]'>$200.00</Text>
            </View>
          </View>

          <View className='w-[300px] h-[350px] p-[20px] bg-white rounded-md flex flex-col items-center gap-[10px] shadow'>
            <View className='font-bold text-[22px]'>Responded Sitters</View>
            <View className='flex-1 w-[100%] overflow-hidden'>
              <ScrollView className='flex flex-col gap-[10px]' style={{ height: "100%" }} enableFlex scrollY>
                {[1, 2, 3, 45, 6, 7, 8, 1, 2, 3, 4].map(() => {
                  return <View className='flex justify-between items-center'>
                    <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                    <Text className='flex-1 mx-[10px] text-[12px] truncate'>Jane Doe</Text>
                    <View onClick={toOrderPage} className='p-[5px] rounded-sm bg-orange-400 flex justify-center items-center text-[10px] text-white'>
                      Confirm
                    </View>
                  </View>
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
