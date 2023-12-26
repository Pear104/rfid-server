import { Body, Controller, Get, Post } from '@nestjs/common';
import { UtilsService } from './utils.service';

@Controller('utils')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}
  @Get('get')
  getDBState() {
    return this.utilsService.getDBState();
  }
  @Post('gotten')
  getUID(@Body() body: any) {
    return this.utilsService.gotten(body.uid);
  }
  @Post('added')
  postAdded(@Body() body: any) {
    return this.utilsService.added();
  }
}
