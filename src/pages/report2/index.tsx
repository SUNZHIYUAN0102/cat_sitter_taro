import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import Navbar from '../index/components/navbar'
import { getReport2 } from '@/apis/report'
import { useState } from 'react'

interface Report2Props {
  conversion_rate: string
  order_count: string
  request_count: string
  sitter_avatar: string
  sitter_gender: string
  sitter_name: string
}

export default function Report2() {

  const [report2List, setReport2List] = useState<Array<Report2Props>>([])

  useLoad(() => {
    handleReport2Query()
  })

  const handleReport2Query = async () => {
    try {
      let res = await getReport2()

      setReport2List(res.data)

      console.log(res);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View className='page'>
      <Navbar></Navbar>
      <View style={{ background: "#f4f4f4" }} className='py-[20px] flex flex-col gap-[5px]'>
        <View className='flex items-center'>
          <View className='flex-[0.5] flex justify-center text-[12px] truncate'>#</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Sitter Name</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Sitter Gender</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Sitter Avatar</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Order Count</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Request Count</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Conversion Rate</View>
        </View>

        {report2List.map((item, index) => {
          return <View key={index} className='flex items-center'>
            <View className='flex-[0.5] flex justify-center text-[12px] truncate'>{index + 1}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.sitter_name}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.sitter_gender}</View>
            <View className='flex-1 flex justify-center truncate'>
              <Image className='w-[14px] h-[14px] rounded-full' src={item.sitter_avatar}></Image>
            </View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.order_count}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.request_count}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{(parseFloat(item.conversion_rate) * 100).toFixed(2)}%</View>
          </View>
        })}
      </View>
    </View>
  )
}
