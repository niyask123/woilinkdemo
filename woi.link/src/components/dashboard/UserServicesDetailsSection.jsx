import React from "react";
import { IoMdNotifications } from "react-icons/io";

const UserServicesDetailsSection = () => {
  return (
    <div className="overflow-x-auto scrollbar-none rounded-xl">
      <div className="flex gap-3 overflow-x-auto w-max">
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <div className="woi_dashboard_notification"> 8+</div>
          <img
            src="/woilink/react/icons/crm.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>CRM</div>
        </button>
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <div className="woi_dashboard_notification"> 1+</div>
          <img
            src="/woilink/react/icons/leads.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>Leads</div>
        </button>
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <div className="woi_dashboard_notification"> 20+</div>
          <img
            src="/woilink/react/icons/contact_book.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>Contact Book</div>
        </button>
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <div className="woi_dashboard_notification"> 3+</div>
          <img
            src="/woilink/react/icons/booking.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>Bookings</div>
        </button>
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <img
            src="/woilink/react/icons/qr_code.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>QR Codes</div>
        </button>
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <img
            src="/woilink/react/icons/analytics.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>Analytics</div>
        </button>
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <img
            src="/woilink/react/icons/order.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>Order</div>
        </button>
        <button className="woi_sec_two_card woi_sec_two_svg w-[10.2rem]">
          <img
            src="/woilink/react/icons/accessories.svg"
            className="woi_sec_two_card_svg"
            alt=""
          />
          <div>Accessories</div>
        </button>
      </div>
    </div>
  );
};

export default UserServicesDetailsSection;
