import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";

export const Blog = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
        alert("Please Login....!")
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  return (
    <div>blog</div>
  )
}

