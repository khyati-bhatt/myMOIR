import { Controller, Post, Body, UseGuards, Request, Get, Delete, Param} from '@nestjs/common';
import { MemoryService } from './memory.service';
import { JwtAuthGuard } from 'src/auth/jwt.strategy/jwt.guard';
import { CreateMemoryDto } from './dto/create-memory.dto';


@Controller('memories')
export class MemoryController {
  constructor(private memoryService: MemoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() body: CreateMemoryDto) {
    return this.memoryService.createMemory(req.user.userId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getMyMemories(@Request() req) {
    return this.memoryService.getUserMemories(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Request() req, @Param('id') id: string) {
    return this.memoryService.softDelete(req.user.userId, id);
    }


    
}