import { Body, Controller, Get, Param, Post,NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {

    }
  @Get()
  getMessages() {
    return this.messagesService.findAll();
  }
  @Get('/:id')
  async getMessageById(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if(!message){
        throw new NotFoundException('Message not found');
    }
    return message;
  }
  @Post()
  postMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
