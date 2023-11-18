import { useState } from "react";
import axios from "axios";
import { update_profile_endpoint } from "../utils/endpoints";

const useUpdateProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  async function updateUserProfile(id,user_data) {
    setIsLoading(true);
    try {
      const res = await axios.put(`${update_profile_endpoint}/${id}`,user_data);
      if (res.status === 200) {
        const { message } = res.data;
        setMessage(message);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return { message, isLoading, updateUserProfile };
};

export default useUpdateProfile;
