import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import NavBar from '../index/components/navbar'
import Taro from '@tarojs/taro'
import { getOrder } from '@/apis/order'
import { useState } from 'react'
import { CatDto } from '@/apis/cat'
import { ServiceDto } from '@/apis/service'
import { SitterDto } from '../requestDetail'

export default function Order() {
  const params = Taro.getCurrentInstance().router!.params

  const [date, setDate] = useState("")
  const [cats, setCats] = useState<Array<CatDto>>([])
  const [services, setServices] = useState<Array<ServiceDto>>([])
  const [sitter, setSitter] = useState<SitterDto | null>(null)
  const [price, setPrice] = useState("")

  useLoad(() => {
    handleOrderQuery()
  })

  const handleOrderQuery = async () => {
    try {
      let res = await getOrder(params.orderId!)

      setDate(res.data.date)
      setCats(res.data.request.cats)
      setServices(res.data.request.services)
      setSitter(res.data.sitter)
      setPrice(res.data.request.price.toString())

      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className='page'>
      <NavBar></NavBar>
      <View style={{ background: "#f4f4f4" }} className="py-[20px] flex justify-center">
        <View className='w-[320px] rounded-md truncate'>
          <View className='infoContainer flex p-[20px] flex-col items-center gap-[10px]'>
            <View className='font-bold text-[22px]'>Order Info</View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Date:</Text>
              <Text className='text-[12px]'>{date}</Text>
            </View>

            <View className='w-[100%] flex items-start gap-[10px]'>
              <Text className='text-[18px]'>Cats:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                {cats.map((item) => {
                  return <Image key={item.id} className='w-[25px] h-[25px] rounded-full' src={item.photo}></Image>
                })}
              </View>
            </View>

            <View className='w-[100%] flex items-start gap-[10px]'>
              <Text className='text-[18px]'>Services:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                {services.map((item) => {
                  return <View key={item.id} className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">{item.name}</View>
                })}
              </View>
            </View>

            <View className='w-[100%] flex items-start gap-[10px]'>
              <Text className='text-[18px]'>Sitter:</Text>
              <View className='flex flex-col items-center gap-[5px]'>
                <Image className='w-[25px] h-[25px] rounded-full' src={sitter?.avatar ?? ""}></Image>
                <Text className='text-[12px]'>{sitter?.name ?? ""}</Text>
              </View>
            </View>

          </View>

          <View className="priceContainer p-[20px] flex justify-between items-center">
            <Text className='text-[18px]'>Total Price:</Text>
            <Text className='text-[12px] text-orange-400'>${price}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
