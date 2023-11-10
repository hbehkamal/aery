import { useState } from "react";

const useHome = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleSwipeView = (index: number) => {
    setTab(index);
  };

  return {
    tab,
    handleTabChange,
    handleSwipeView,
  };
};

export default useHome;
