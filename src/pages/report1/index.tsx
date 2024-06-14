import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import Navbar from '../index/components/navbar'
import { useState } from 'react'
import { getReport1 } from '@/apis/report'

interface Report1Props {
  CatsAge: number
  favoriteService: string
  latestRequestDate: string
  numberOfRequests: string
  servicePrice: number
}

export default function Report1() {

  const [report1List, setReport1List] = useState<Array<Report1Props>>([])

  useLoad(() => {
    handleReport2Query()
  })

  const formatLocalDate = (dateString) => {
    const d = new Date(dateString);
    const year = d.getUTCFullYear();
    const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = d.getUTCDate().toString().padStart(2, '0');
    const hour = d.getUTCHours().toString().padStart(2, '0');
    const minutes = d.getUTCMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleReport2Query = async () => {
    try {
      let res = await getReport1()

      res.data.forEach((item) => {
        item.latestRequestDate = formatLocalDate(item.latestRequestDate)
      })

      setReport1List(res.data)

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
          <View className='flex-1 flex justify-center text-[12px] truncate'>Favorite Service</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Service Price</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Request Count</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Latest Date</View>
          <View className='flex-1 flex justify-center text-[12px] truncate'>Cat Age</View>
        </View>

        {report1List.map((item, index) => {
          return <View key={index} className='flex items-center'>
            <View className='flex-[0.5] flex justify-center text-[12px] truncate'>{index+1}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.favoriteService}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.servicePrice}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.numberOfRequests}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.latestRequestDate}</View>
            <View className='flex-1 flex justify-center text-[12px] truncate'>{item.CatsAge}</View>
          </View>
        })}
      </View>
    </View>
  )
}
