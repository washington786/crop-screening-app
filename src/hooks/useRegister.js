import axios from "axios";
import React, { useState } from "react";
import { register_endpoint } from "../utils/endpoints";
import { useNavigation } from "@react-navigation/native";

const useRegister = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [message, setMessage] = useState("");

  async function registerUser(user_details) {
    setIsLoading(true);
    try {
      const res = await axios.post(`${register_endpoint}`, user_details);
      if (res.status === 200) {
        const { message, farmer } = res.data;

        setMessage(message);
        setData(farmer);

        setTimeout(() => {
          navigation.replace("app");
        }, 5000);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, data, message, registerUser };
};

export default useRegister;
