import {Controller,Get} from '@nestjs/common';
@Controller('/xyz')
export default class AppController{

    @Get()
    getRootRoute(){
        return "Hello, World!";
    }

    @Get('/about')
    getAboutRoute(){
        return "This is the about route.";
    }

}