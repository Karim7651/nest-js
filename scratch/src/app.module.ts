import { Module } from "@nestjs/common";
import AppController from "./app.controller";
@Module({
    controllers: [AppController], // Registering the controller (create instance of app controller)
})
export default class AppModule{}