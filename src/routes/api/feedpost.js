import { connectToDatabase } from "$lib/dbase/db.js";
import { Feed } from "$lib/models/Feed.js";

export async function post(request) {
    try{
        await connectToDatabase()
        
    
        const feed = new Feed(JSON.parse(request.body))
        const savedfeed = await feed.save()
        return{
            status: 200,
            body: {
                savedfeed
            }
        }
    }catch(error) {
        return{
            status:500,
            body: {
                error
            }
        }
    }
}