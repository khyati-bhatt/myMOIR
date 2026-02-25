import { MediaType, Mood } from "./enums";

export interface Memory {
  id: string;
  userId: string;

  // System
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  // Content
  title: string | null;
  caption: string;
  mediaType: MediaType;
  mediaKey: string;
  thumbnailKey: string;
  audioKey: string | null;

  // Reflection
  mood: Mood;
  intensity: number; // 1-5
  reflectionNote: string | null;

  // Context
  locationName: string | null;
  latitude: number | null;
  longitude: number | null;
  takenAt: Date;

  // State
  isFavorite: boolean;
  isArchived: boolean;
}