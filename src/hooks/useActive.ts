import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useActive = (path: string) => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (path === location.pathname) setActive(true);
    else setActive(false);
  }, [location.pathname, path]);

  return { active };
};
