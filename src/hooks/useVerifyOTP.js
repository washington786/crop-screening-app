import axios from "axios";
import { useState } from "react";
import { otp_endpoint } from "../utils/endpoints";
import { useNavigation } from "@react-navigation/native";

const verifyOneTimePin = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function verifyOtp(user_data) {
    const {email} = user_data;
    setIsLoading(true);
    try {
      const res = await axios.post(`${otp_endpoint}`, user_data);
      if (res.status === 200) {
        const { message } = res.data

        setMessage(message);

        setTimeout(() => {
          navigation.replace("resetAccess",{email});
        }, 5000);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, message, verifyOtp };
};

export default verifyOneTimePin;
