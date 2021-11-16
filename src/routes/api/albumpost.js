import {connectToDatabase} from "$lib/dbase/db.js"
import {Album} from "$lib/models/Album.js"


export async function post(request) {
    try{
        await connectToDatabase()
        

        const album = new Album({
            title : request.body.title,
            artist : request.body.artist,
            featuring : request.body.featuring,
            album: request.body.album,
            image : request.body.image,
            source : request.body.source,
            category: request.body.category,
            //date : default

        })
        const savedalbum = await album.save();
        return{
            status: 200,
            body : {
                savedalbum
            }
        }
    }catch(error) {
        return{
            status:500,
            body : {
                error
            }
        }
    }
}

