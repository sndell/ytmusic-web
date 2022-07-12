from routers import auth, library, playlist
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

origins = ["http://localhost:3000", "http://localhost:3001",
           "https://youtube-next-delta.vercel.app"]

router = APIRouter()
router.include_router(auth.router, prefix='/auth', tags=['auth'])
router.include_router(library.router, prefix='', tags=['library'])
router.include_router(playlist.router, prefix='/playlist', tags=['playlist'])

app = FastAPI()
app.include_router(router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)