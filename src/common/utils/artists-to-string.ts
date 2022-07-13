import { IArtist } from "../../types/definition/playlist";

const getArtistsString = (artists: IArtist[]) => {
  const nrOfArtists = Object.keys(artists).length;
  if (nrOfArtists > 1) {
    return artists.map((artist: IArtist, index: number) => {
      if (index !== nrOfArtists - 1) {
        if (index === nrOfArtists - 2) return artist.name + ' and ';
        return artist.name + ', ';
      }
      return artist.name;
    });
  }

  return artists[0].name;
};

export default getArtistsString