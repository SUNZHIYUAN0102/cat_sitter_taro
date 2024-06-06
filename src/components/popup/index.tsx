import { View } from "@tarojs/components";
import React, { ReactNode } from "react";

interface PopupProps {
    visible: boolean;
    children?: ReactNode;
    handlePopup: (visible: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({ visible, children, handlePopup }) => {
    console.log(visible);


    if (!visible) return null;

    return <View className="fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-70 z-[100] flex justify-center items-center" onClick={() => { handlePopup(false); }}>
        <View className="bg-white p-[20px] rounded-md w-[300px]" onClick={(e) => { e.stopPropagation() }}>
            {children}
        </View>
    </View>
}

export default Popup;