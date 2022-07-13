import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import { IPlaylist } from '../../../types/definition/playlist';

export const usePlaylist = () => {
  const params = useParams();
  const [playlist, setPlaylist] = useState<IPlaylist | undefined>(JSON.parse(localStorage.getItem(params.playlistId!)!));
  const [controller, setController] = useState(new AbortController());

  useEffect(() => {

    controller.abort();
    const newController = new AbortController();
    setController(newController);

    axios
      .get(`http://localhost:8000/playlist/${params.playlistId}`, {
        signal: newController.signal,
        params: {
          headers: localStorage.getItem('headers'),
        },
      })
      .then((res) => {
        setPlaylist(res.data);
        localStorage.setItem(params.playlistId!, JSON.stringify(res.data));
      })
      .catch((e) => console.log(e.message));
  }, [params]);

  return playlist;
};
