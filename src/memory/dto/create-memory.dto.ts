import { IsEnum, IsInt, IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { MediaType, Mood } from '@prisma/client';

export class CreateMemoryDto {
  @IsString()
  @IsNotEmpty()
  caption: string;

  @IsEnum(MediaType)
  mediaType: MediaType;

  @IsString()
  @IsNotEmpty()
  mediaKey: string;

  @IsString()
  @IsNotEmpty()
  thumbnailKey: string;

  @IsEnum(Mood)
  mood: Mood;

  @IsInt()
  intensity: number;

  @IsDateString()
  takenAt: string;
}