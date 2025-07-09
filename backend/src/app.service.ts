import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello cvvvam!';
  }


  takeInput() {
    return "here is the innput"
  }


}
