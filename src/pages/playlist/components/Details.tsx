import React from 'react';
import { IPlaylist } from '../../../types/definition/playlist';

interface IProps {
  playlist: IPlaylist;
}

const Details = ({ playlist }: IProps) => {
  return <div>{playlist.title}</div>;
};

export default Details;
