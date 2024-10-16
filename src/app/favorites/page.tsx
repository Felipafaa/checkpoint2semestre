'use client'
import { Header } from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import UserContext from "@/context/UserContext";
import { useVerifyLogin } from "@/helpers/useVerifyLogin";
import { useContext } from "react";

export default function Favorites() {
    useVerifyLogin();
    const { userName } = useContext(UserContext);
  
    return (
      <Layout>
        <Header title="Favoritos" userName={userName} />
      </Layout>
    );
  }