import { injectable } from 'tsyringe';
import { Message } from '../schemas/Message';

@injectable()
class GetMessagesByChatRoomService {
    async execute(roomId: string) {
        return await Message.find({
            roomId
        }).populate('to').exec();
    }
}

export { GetMessagesByChatRoomService }