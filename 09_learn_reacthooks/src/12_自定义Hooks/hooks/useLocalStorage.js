import { useEffect, useState } from "react";

function useLocalStorage(key) {
  const [data, setDate] = useState(localStorage.getItem(key));

  useEffect(() => {
    localStorage.setItem(key, data);
  }, [data]);

  return [data, setDate];
}

export default useLocalStorage;
