import React from 'react'
import { AiOutlineCaretDown, AiOutlineEllipsis, AiOutlineMore } from 'react-icons/ai'
import { RxCardStackPlus } from 'react-icons/rx'
import { cardsDetails } from '../../data/mainData'
import { FaAngleRight } from 'react-icons/fa6'

const PaymentDetailSection = () => {
  return (
    <div className=' w-full'>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 p-3 py-6 rounded-2xl bg_woi_payment_side text-black">
          <div className="w-full text-sm text-blue-700 font-medium flex flex-row justify-between">
            <div className="">Payment Due</div>
            <div className="flex gap-2 items-center">
              <div className="">See Details</div>
              <div className="">
                <AiOutlineMore className='font-bold text-lg' />
              </div>
            </div>
          </div>
          <div className="w-full text-2xl font-semibold text-center text-blue-700">$ 569,548. <span className='text-xs font-medium'>49</span></div>
          <div className="w-full flex justify-center items-center">
            <button className='btn  px-14 rounded-full bg-blue-700 text-white shadow-none items-center justify-center'>Make Payment <FaAngleRight /></button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-3 py-6 rounded-2xl bg-white text-black">
          <div className="flex w-full justify-between text-xs" >
            <div className="text-base font-semibold">Plans</div>
            <div className="flex gap-2 items-center">
              <div className="text-xxs font-medium">View Details</div>
              <div className=""><AiOutlineCaretDown /></div>
            </div>
          </div>
          {cardsDetails.map((cards) => {
            const IconComponent = cards.icon;
            return (
              <div key={cards.id} className="flex flex-row 2xl:gap-2 xl:gap-1 border border-[#b9b9b9] lg:gap-2 px-3 py-2 xl:text-[10px] 2xl:text-xxs md:text-[11px] font-medium bg-white text-black rounded-2xl">
                <div className={`md:p-2 xl:p-1.5 2xl:p-2 ${cards.bgColor} h-full 2xl:mr-2 rounded-full`}><IconComponent className='text-lg text-white' /></div>
                <div className="flex w-full flex-col justify-center">
                  <div className="font-semibold">{cards.title}</div>
                  <div className="truncate"><span className='text-green-700'>{cards.plan}</span> (Discount- {cards.discount})</div>
                  <div className="">Total Credit - {cards.totalCredit}</div>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <div className=""><AiOutlineEllipsis className='text-xl' /></div>
                  <div className="text-nowrap">{cards.planStatus}</div>
                  <div className="text-red-600">{cards.expiryDate}</div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center">
            <button className="btn  px-14 rounded-full bg-white woi_upgrade_btn border-none text-white shadow-none">UPGRADE NOW</button>
          </div>
          <div className="flex justify-center">
            <button className="btn  px-14 rounded-full bg-black text-white border-none border-white  shadow-none">Buy New Plans <FaAngleRight /> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailSection
