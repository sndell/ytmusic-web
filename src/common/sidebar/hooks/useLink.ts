import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const useLink = (path: string) => {
  const [active, setActive] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (path === location.pathname) setActive(true)
    else setActive(false)
  }, [location.pathname, path, navigate])

  const to = (path: string)  => {
    navigate(path);
  }

  return {active, to}
}