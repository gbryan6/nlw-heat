import prismaClient  from '../prisma'
import { io } from '../app'
class GetLast3MEssagesService{
    async execute(){
       const messages = await prismaClient.message.findMany({
           take: 3,
           orderBy: {
               created_at: "desc"
           },
           include: {
               user: true
           }
       })
        
       return messages;
    }
}

export { GetLast3MEssagesService }