import Chart from "../../components/dashboard/Chart";
import PaymentDetailSection from "../../components/dashboard/PaymentDetailSection";
import ProfileDetails from "../../components/dashboard/ProfileDetails";
import ToolsDetails from "../../components/dashboard/ToolsDetails";
import UserActiveCardsSection from "../../components/dashboard/UserActiveCardsSection";
import UserDetailSection from "../../components/dashboard/UserDetailSection";
import UserServicesDetailsSection from "../../components/dashboard/UserServicesDetailsSection";



const DashboardHome = () => {
  return (
    <div className="xl:mx-20 lg:mx-10">
      <div className="flex flex-row gap-3 py-4 md:px-0 px-2">
        <div className="2xl:w-4/5 xl:w-4/5 lg:w-4/6 w-full flex flex-col gap-3">
          <UserDetailSection />
          <UserServicesDetailsSection />
          <ToolsDetails />
          <ProfileDetails />
          {/* <UserActiveCardsSection /> */}
          {/* <Chart/> */}

        </div>
        <div className="2xl:w-1/5 lg:w-2/6 xl:w-full hidden lg:block sticky top-36 self-start">
          <PaymentDetailSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
