import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {

  async findOne(id: string) {
    const contents = await readFile('C:\\Users\\karim_kz1y8s\\Desktop\\nest\\cli\\messages\\src\\messages\\messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('C:\\Users\\karim_kz1y8s\\Desktop\\nest\\cli\\messages\\src\\messages\\messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string) {
    const contents = await readFile('C:\\Users\\karim_kz1y8s\\Desktop\\nest\\cli\\messages\\src\\messages\\messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999999).toString();
    messages[id] = { id, message };
    await writeFile('C:\\Users\\karim_kz1y8s\\Desktop\\nest\\cli\\messages\\src\\messages\\messages.json', JSON.stringify(messages));
  }
  
}
