import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import Navbar from '../index/components/navbar'

export default function Report2() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='page'>
      <Navbar></Navbar>
      <View style={{ background: "#f4f4f4" }} className='py-[20px] flex flex-col gap-[5px]'>
        <View className='flex items-center'>
          <View className='flex-[0.5] flex justify-center text-[12px] truncate'>#</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Sitter name</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Sitter gender</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Sitter avatar</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Order count</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Request count</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Conversion rate</View>
        </View>

        <View className='flex items-center'>
          <View className='flex-[0.5] flex justify-center text-[12px] truncate'>1</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Zhiyuan Sun</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>NAN</View>
          <View className='flex-1 flex justify-center truncate'>
            <Image className='w-[14px] h-[14px] rounded-full' src="https://6472-dream-party-online-6d9jtce38e6b1-1302634362.tcb.qcloud.la/didi_party/app_pictures/cats/1.png"></Image>
          </View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>100</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>200</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>50%</View>
        </View>
      </View>
    </View>
  )
}
