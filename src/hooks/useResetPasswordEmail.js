import axios from "axios";
import { useState } from "react";
import { resetPassword_endpoint } from "../utils/endpoints";
import { useNavigation } from "@react-navigation/native";

const useResetPasswordEmail = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function resetUserPassword(user_data) {
    setIsLoading(true);
    const { email } = user_data;
    try {
      const res = await axios.post(`${resetPassword_endpoint}`, user_data);
      if (res.status === 200) {
        const { message } = res.data;

        setMessage(message);

        setTimeout(() => {
          navigation.navigate("otp", { email:email });
        }, 5000);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, message, resetUserPassword };
};

export default useResetPasswordEmail;
