from fastapi import APIRouter, HTTPException
from ytmusicapi import YTMusic
from typing import Union
from util.color_picker import get_color

router = APIRouter()


@router.get('/{playlist_id}')
def get_playlist(playlist_id: str, headers: Union[str, None] = None):
    try:
        ytmusic = None
        if headers:
            ytmusic = YTMusic(auth=headers)
        else:
            ytmusic = YTMusic()
        playlist = ytmusic.get_playlist(playlist_id, 5000)
        url = playlist.get("thumbnails")[0].get("url")
        r, g, b = get_color(url)
        playlist["color"] = {'r': r, 'g': g, 'b': b}
        return playlist
    except:
        raise HTTPException(status_code=400, detail='invalid id')