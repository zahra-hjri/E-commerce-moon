"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const validate = async () => {
      try {
        const res = await axios.post("/api/auth/validate-token", { token });
        if (!res.data.valid) {
          localStorage.removeItem("token");
          router.push("/register");
        }
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        router.push("/register");
      }
    };

    validate();
  }, []);

  return (
    <div className="w-[50%] mt-10 mx-auto[50%] mx-auto bg-teal-500">
      dashboardddddd
    </div>
  );
};
export default Dashboard;
