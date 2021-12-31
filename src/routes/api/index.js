import {connectToDatabase} from "$lib/dbase/db.js"
import {Song} from "$lib/models/Song.js"
import {Album} from "$lib/models/Album.js"



export async function get(request) {
    try{
        await connectToDatabase()
        const songs = await Song.find()
        const album = await Album.find()
        return{
            status: 200,
            body: {
                songs,
                album
            }
        }
    }catch(error) {
        return{
            body: {
                songs:[{...error, artist:"try reloading over the network" ,title:"network error"}],
                albums:[{...error, artist:"try reloading over the network" ,title:"network error"}],
            }
        }
    }
};

