import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MediaType, Mood } from '@prisma/client';

@Injectable()
export class MemoryService {
  constructor(private prisma: PrismaService) {}

  async createMemory(userId: string, data: any) {
    return this.prisma.memory.create({
      data: {
        userId,
        caption: data.caption,
        mediaType: data.mediaType as MediaType,
        mediaKey: data.mediaKey,
        thumbnailKey: data.thumbnailKey,
        mood: data.mood as Mood,
        intensity: data.intensity,
        takenAt: new Date(data.takenAt),
      },
    });
  }

  async getUserMemories(userId: string) {
    return this.prisma.memory.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      orderBy: {
        takenAt: 'desc',
      },
    });
  }

  async softDelete(userId: string, memoryId: string) {
    return this.prisma.memory.update({
        where: {
        id: memoryId,
        userId, 
        },
        data: {
        deletedAt: new Date(),
        },
    });
    }
}