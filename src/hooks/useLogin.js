import axios from "axios";
import { useState } from "react";
import { login_endpoint } from "../utils/endpoints";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogin = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [message, setMessage] = useState("");

  async function saveFarmerData(farmer) {
    try {
      const farmer_ = JSON.stringify(farmer);
      await AsyncStorage.setItem(`farmer`, `${farmer_}`);
      console.log("data is saved", farmer_);
    } catch (error) {
      console.log(error);
    }
  }

  async function loginUser(user_details) {
    setIsLoading(true);
    try {
      const res = await axios.post(`${login_endpoint}`, user_details);
      if (res.status === 200) {
        const { message, farmer } = res.data;

        saveFarmerData(farmer);

        setMessage(message);

        setTimeout(() => {
          navigation.replace("app");
          setIsLoading(false);
        }, 3000);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, data, message, loginUser };
};

export default useLogin;
