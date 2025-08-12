import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Phone.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';

function PhoneSignin() {
  const [phone, setPhone] = useState('');
const [user, setUser] = useState(null);
const [otp,setOtp]=useState("");
const sendOtp=async()=>{
    try{
        const recaptcha =new RecaptchaVerifier(auth,"recaptcha",{});
  const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
setUser(confirmation);
    console.log(confirmation);
    }
    catch(err){
        console.error(err);
    }
    

}

const VerifyOtp=async()=>{
   try{
const data = await user.confirm(otp);
   }
   catch(err){
    console.error(err);
   }
}



  return (
    <div className='container otp-container'>
        <div className='col-6'>
    <div className="phone-signin  " id="root">
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={(phone)=>setPhone("+" + phone)}
      />
      <button
        className="phone-contant p-2 btn btn-success fs-6 mb-5 mt-2"
        style={{ width: "30%", margin: "0 auto" }}
        onClick={sendOtp}
      >
        Send Otp
      </button>
      <div id='recaptcha'    style={{margin: "10px" }}>

      </div>

      <div className="input-group flex-nowrap container  ">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Otp"
      
          onChange={(e) => setOtp(e.target.value)}
        aria-label="Enter Otp"
         aria-describedby="addon-wrapping"
        
        />
      </div>

      <button
        className="phone-contant p-2 btn btn-success fs-6 mb-5 mt-2"
        style={{ width: "30%", margin: "0 auto" }} onClick={VerifyOtp }
        
      >
        Verify Otp
      </button>
    </div>
    </div>
    </div>
  );
}

export default PhoneSignin;
