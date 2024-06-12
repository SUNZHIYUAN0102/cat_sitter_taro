import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import NavBar from '../index/components/navbar'

export default function Order() {



  return (
    <View className='page'>
      <NavBar></NavBar>
      <View style={{ background: "#f4f4f4" }} className="py-[20px] flex justify-center">
        <View className='w-[320px] rounded-md truncate'>
          <View className='infoContainer flex p-[20px] flex-col items-center gap-[10px]'>
            <View className='font-bold text-[22px]'>Order Info</View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Date:</Text>
              <Text className='text-[12px]'>2021-10-10</Text>
            </View>

            <View className='w-[100%] flex items-start gap-[10px]'>
              <Text className='text-[18px]'>Cats:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                {[1, 2, 3, 4, 5, 6].map(() => {
                  return <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                })}
              </View>
            </View>

            <View className='w-[100%] flex items-start gap-[10px]'>
              <Text className='text-[18px]'>Services:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                <View className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">Feed Cat</View>
              </View>
            </View>

            <View className='w-[100%] flex items-start gap-[10px]'>
              <Text className='text-[18px]'>Sitter:</Text>
              <View className='flex flex-col items-center gap-[5px]'>
                <Image className='w-[25px] h-[25px] rounded-full' src="https://picsum.photos/id/40/40/40"></Image>
                <Text className='text-[12px]'>John Doe</Text>
              </View>
            </View>

          </View>

          <View className="priceContainer p-[20px] flex justify-between items-center">
            <Text className='text-[18px]'>Total Price:</Text>
            <Text className='text-[12px] text-orange-400'>$200.00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
