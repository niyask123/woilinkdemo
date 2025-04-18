
import React, { useEffect, useState } from 'react'

// import SignUpIndex from '../../components/login/digitalcard/SignUpIndex';
// import ChooseUsername from '../../components/login/digitalcard/ChooseUsername';
// import EmailConfirmation from '../../components/login/digitalcard/EmailConfirmation';
import { Link } from 'react-router-dom';
import Profile3DCard from '../../components/demotest/LinkInBio3D';
import SignUpIndex from '../../components/login/linkInBio/SignUpIndex';
import ChooseUsername from '../../components/login/linkInBio/ChooseUsername';
import EmailConfirmation from '../../components/login/linkInBio/EmailConfirmation';
import LinkInBioMobile3D from '../../components/demotest/LinkInBioMobile3D';

const LinkInBio = () => {
  const [step, setStep] = useState("signup");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Set font globally
    const style = document.createElement("style");
    style.innerHTML = `* { font-family: "Inter", sans-serif !important; }`;
    document.head.appendChild(style);

    // Show loader only on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setShowLoader(true);
    }

    return () => {
      document.head.removeChild(style);
    };
  }, []);


  return (
    <>
      {showLoader && (
        <LinkInBioMobile3D onFinish={() => setShowLoader(false)} />
      )}

      {!showLoader && (
        <div className="flex font-inter lg:flex-row relative ">
          <div className="h-md lg:!h-lg absolute top-5 left-5 lg:top-2xl lg:left-2xl z-50">
            <div className="focus:outline-2 focus:outline-black focus:outline-offset-8">
              <Link to={'/'}>
                <img src="/woilink/react/logo/woi_logo.png" className='object-contain w-20 md:w-28' alt="" />
              </Link>
            </div>
          </div>
          {/* Show SignUpIndex OR ChooseUsername */}
          {step === "signup" && (
            <SignUpIndex onSignUpSuccess={() => setStep("username")} />
          )}

          {step === "username" && (
            <ChooseUsername
              onBack={() => setStep("signup")}
              onContinue={() => setStep("emailConfirmation")}
            />
          )}

          {step === "emailConfirmation" && (
            <EmailConfirmation onBack={() => setStep("username")} />
          )}
          <div className="hidden items-center justify-center overflow-hidden lg:!flex lg:w-[calc(100vw-48%)]  bg-center bg-cover bg-no-repeat bg-[#225AC0]">
            <Profile3DCard />
          </div>
        </div>
      )}
    </>
  );
}

export default LinkInBio
