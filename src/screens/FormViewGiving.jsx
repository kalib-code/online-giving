import React from 'react'
import Givingcreen from './GivingScreen'
import LoginScreen from './LoginScreen'

export default function FormView() {
    return (
        <div>
             <div className=" flex container mx-auto justify-center h-screen items-center">
            <div className="items-center justify-center border-1 shadow-lg border-gray-100 p-3.5 md:w-1/2 h-auto content-between w-4/5">
              <div className=" flex flex-col w-full items-center justify-center ">
                <img
                  className=" w-40 h-40"
                  src="https://lynkdev.com/wp-content/uploads/2021/06/106990650_3163969286982885_168510827730310867_n.jpg"
                />
                <h1>Destiny City Church</h1>
              </div>
                    <Givingcreen />
              </div>
              </div>


        </div>
    )
}
