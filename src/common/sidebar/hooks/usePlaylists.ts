import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectHeaders } from '../../../store/auth';
import axios from 'axios';

export const usePlaylists = () => {
  const headers = useSelector(selectHeaders);
  const [playlists, setPlaylists] = useState(JSON.parse(localStorage.getItem('playlists')!) || []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/playlists', {
        params: {
          headers,
        },
      })
      .then((res) => {
        setPlaylists(res.data);
        localStorage.setItem('playlists', JSON.stringify(res.data))
      })
      .catch((e) => console.log(e.message));
  }, [headers]);

  return playlists;
};
