import axios from "axios";
import { useState } from "react";
import { update_password_endpoint } from "../utils/endpoints";
import { useNavigation } from "@react-navigation/native";

const useConfirmPasswords = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function changePassword(user_data) {
    setIsLoading(true);
    const {email} = user_data;
    try {
      const res = await axios.post(`${update_password_endpoint}`, user_data);
      if (res.status === 200) {
        const { message } = res.data;

        setMessage(message);

        setTimeout(() => {
          navigation.replace("resetSuccess",{email});
        }, 5000);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, message, changePassword };
};

export default useConfirmPasswords;
