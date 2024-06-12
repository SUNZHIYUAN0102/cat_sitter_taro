import { View, Text, Input, Image } from "@tarojs/components";
import Footer from "../index/components/footer";
import NavBar from "../index/components/navbar";
import Taro, { useLoad } from "@tarojs/taro";
import { ServiceDto, getServices } from "@/apis/service";
import { useEffect, useState } from "react";
import { CatDto, getCats } from "@/apis/cat";
import { ServiceResponseDto, postServiceRequest } from "@/apis/request";

interface SelectionService extends ServiceDto {
    selected: boolean
}

interface SelectionCat extends CatDto {
    selected: boolean
}

export default function RequestPage() {
    const [date, setDate] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [serviceList, setServiceList] = useState<SelectionService[]>([])
    const [catList, setCatList] = useState<SelectionCat[]>([])

    useLoad(() => {
        queryServices()
        queryCats()
    })

    const queryServices = async () => {
        try {
            let res = await getServices();

            let list = res.data.map((item: ServiceDto) => {
                return { ...item, selected: false }
            })

            setServiceList(list)
        } catch (error) {
            console.log(error);
        }
    }

    const handleServiceSelection = (id: string) => {
        let list = serviceList.map((item) => {
            if (item.id === id) {
                item.selected = !item.selected
            }
            return item
        })

        setServiceList(list)
    }

    const queryCats = async () => {
        try {
            let res = await getCats(Taro.getStorageSync('user').email);

            let list = res.data.map((item: CatDto) => {
                return { ...item, selected: false }
            })

            setCatList(list)
        } catch (error) {
            console.log(error);
        }
    }

    const handleCatSelection = (id: string) => {
        let list = catList.map((item) => {
            if (item.id === id) {
                item.selected = !item.selected
            }
            return item
        })

        setCatList(list)
    }

    useEffect(() => {
        let catAmount = catList.filter((item) => item.selected).length

        //price calculation
        let total = serviceList.reduce((acc, item) => {
            if (item.selected) {
                acc += item.price
            }
            return acc
        }, 0)

        setPrice(total * catAmount)
    }, [serviceList, catList])

    const toRequestDetailPage = (requestId: string) => {
        Taro.redirectTo({
            url: `pages/requestDetail/index?requestId=${requestId}`
        })
    }

    const handleRequestPost = async () => {
        try {
            let res = await postServiceRequest({
                requestDate: date,
                price: price,
                catids: catList.filter((item) => item.selected).map((item) => item.id),
                serviceids: serviceList.filter((item) => item.selected).map((item) => item.id)
            })

            let data: ServiceResponseDto = res.data
            toRequestDetailPage(data.requestid)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View className="page">
            <NavBar></NavBar>
            <View style={{ background: "#f4f4f4" }} className="py-[20px] flex justify-center">
                <View className="w-[450px] rounded border border-orange-500 py-[10px] px-[30px] flex flex-col items-center gap-[10px]">
                    <Text className="font-['Pacifico'] text-[20px] font-bold">Find A Sitter</Text>

                    <View className="w-[100%] flex flex-col gap-[5px]">
                        <Text className="text-[15px]">Date:</Text>
                        <Input value={date} onInput={(e) => { setDate(e.detail.value) }} className='w-[200px] border-[0.5px] border-orange-400 bg-white rounded-md p-[5px] text-[8px]' />
                    </View>

                    <View className="w-[100%] flex flex-col gap-[5px]">
                        <Text className="text-[15px]">My Cats:</Text>
                        <View className="flex flex-wrap gap-[5px]">
                            {catList.map((item) => {
                                return <View onClick={() => { handleCatSelection(item.id) }} key={item.id} style={{ borderColor: item.selected ? "#EC974F" : "" }} className="w-[40px] h-[40px] rounded-full overflow-hidden border border-transparent">
                                    <Image mode="aspectFill" className="w-[100%] h-[100%]" src={item.photo}></Image>
                                </View>
                            })}
                        </View>
                    </View>

                    <View className="w-[100%] flex flex-col gap-[5px]">
                        <Text className="text-[15px]">Available Services:</Text>
                        <View className="flex flex-wrap gap-[5px]">
                            {serviceList.map((item) => {
                                return <View onClick={(() => { handleServiceSelection(item.id) })} key={item.id} style={{ background: item.selected ? "#EC974F" : "", color: item.selected ? "white" : "" }} className="px-[5px] py-[5px] bg-white rounded-sm text-[10px]">{item.name}</View>
                            })}
                        </View>
                    </View>

                    <View className="w-[100%] flex items-center gap-[5px]">
                        <Text className="text-[15px]">Price:</Text>
                        <Text className="text-[20px] text-orange-400">${price}</Text>
                    </View>

                    <View className="w-[100%] flex justify-center">
                        <View onClick={handleRequestPost} className="bg-orange-400 p-[8px] rounded-lg text-white text-[12px] font-bold cursor-pointer">
                            Submit Request
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}