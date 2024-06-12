import { View, Text, Image, ScrollView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import NavBar from '../index/components/navbar'
import Taro from '@tarojs/taro'
import { ServiceResponseDto, getServiceRequest } from '@/apis/request'
import { useState } from 'react'
import { CatDto } from '@/apis/cat'
import { ServiceDto } from '@/apis/service'

export default function RequestDetailPage() {
  const params = Taro.getCurrentInstance().router!.params

  const [date, setDate] = useState("")
  const [cats, setCats] = useState<Array<CatDto>>([])
  const [services, setServices] = useState<Array<ServiceDto>>([])
  const [price, setPrice] = useState("")

  useLoad(() => {
    handleServiceRequestQuery()
  })

  const handleServiceRequestQuery = async () => {
    try {
      let res = await getServiceRequest(params.requestId!)

      let data: ServiceResponseDto = res.data
      setDate(data.date)
      setCats(data.cats)
      setServices(data.services)
      setPrice(data.price.toString())

    } catch (error) {
      console.log(error);
    }
  }

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
              <Text className='text-[12px]'>{date}</Text>
            </View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Cats:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                {cats.map((item) => {
                  return <Image key={item.id} className='w-[25px] h-[25px] rounded-full' src={item.photo}></Image>
                })}
              </View>
            </View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Services:</Text>
              <View className='flex-1 flex flex-wrap gap-[5px]'>
                {services.map((item) => {
                  return <View key={item.id} className="px-[5px] py-[5px] bg-orange-200 text-white rounded-sm text-[10px]">{item.name}</View>
                })}
              </View>
            </View>
            <View className='w-[100%] flex items-center gap-[10px]'>
              <Text className='text-[18px]'>Price:</Text>
              <Text className='text-[12px]'>${price}</Text>
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
