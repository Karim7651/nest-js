import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // messagesRepo: MessagesRepository;
  // constructor(messagesRepo: MessagesRepository ) {
  //   this.messagesRepo = new MessagesRepository();
  // }
  // Short hand for above code
  constructor(private messagesRepo: MessagesRepository) {}
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(message: string) {
    return this.messagesRepo.create(message);
  }
}
