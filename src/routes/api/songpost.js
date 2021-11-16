import {connectToDatabase} from "$lib/dbase/db.js"
import {Song} from "$lib/models/Song.js"


export async function post(request) {
    try{
        await connectToDatabase()
        

        const song = new Song({
            title : request.body.title,
            artist : request.body.artist,
            featuring : request.body.featuring,
            album: request.body.album,
            image : request.body.image,
            source : request.body.source,
            category: request.body.category,
            //date : default

        })
        const savedsong = await song.save();
        return{
            status: 200,
            body : {
                savedsong
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

