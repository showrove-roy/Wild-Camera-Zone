import { useEffect, useState } from "react";

const useUserType = (email) => {
  const [userType, setIsUserType] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://wild-camera-zone-server.vercel.app/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsUserType(data);
          setUserLoading(false);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setUserLoading(false);
        });
    }
  }, [email]);
  return [userType, userLoading];
};

export default useUserType;
