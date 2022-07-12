from fastapi import APIRouter, HTTPException
from ytmusicapi import YTMusic
from util.get_auth_headers import get_auth_headers

router = APIRouter()

@router.get('/')
def auth(headers: str):
  try:
    converted = get_auth_headers(headers_raw=headers)

    try:
        ytmusic = YTMusic(converted)
        ytmusic.get_library_playlists()
        return converted
    except:
        return HTTPException(status_code=400, detail='invalid headers')
  except: 
    raise HTTPException(status_code=400, detail='invalid headers')