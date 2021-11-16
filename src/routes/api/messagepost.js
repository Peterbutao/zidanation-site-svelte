import { connectToDatabase } from "$lib/dbase/db.js";
import { Message } from "$lib/models/Message.js";

export async function post(request) {
    try{
        await connectToDatabase()
        
    
        const message = new Message(JSON.parse(request.body))
        const savedmessage = await message.save()
        return{
            status: 200,
            body: {
                savedmessage
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