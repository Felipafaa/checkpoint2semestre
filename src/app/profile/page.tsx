'use client'
import { Header } from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import UserContext from "@/context/UserContext";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
  
    const { userName, setUserName } = useContext(UserContext);
  
    useEffect(() => {
      const userToken = JSON.parse(sessionStorage.getItem("userToken"));
  
      if (userToken) {
        const userData = jwtDecode(userToken.token);
        setUserName(userData.name);
      } else {
        navigate("/login");
      }
    }, []);
  
    return (
      <Layout>
        <Header title="Perfil" userName={userName} />
      </Layout>
    );
  }