from fastapi import APIRouter, HTTPException
from ytmusicapi import YTMusic

router = APIRouter()

@router.get('/playlists')
def get_playlists(headers: str):
  try:
    ytmusic = YTMusic(auth=headers)
    playlists = ytmusic.get_library_playlists(0)
    playlists.pop(0)
    return playlists
  except: 
    raise HTTPException(status_code=400, detail='invalid headers')