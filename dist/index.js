"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./domain/enums");
const sampleMemory = {
    id: "uuid-123",
    userId: "uuid-user",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    title: "Evening Calm",
    caption: "Soft lilac sunset today.",
    mediaType: enums_1.MediaType.IMAGE,
    mediaKey: "media/123.jpg",
    thumbnailKey: "thumbnails/123.jpg",
    audioKey: null,
    mood: enums_1.Mood.CALM,
    intensity: 3,
    reflectionNote: "Felt grounded and quiet.",
    locationName: "Home Terrace",
    latitude: null,
    longitude: null,
    takenAt: new Date(),
    isFavorite: false,
    isArchived: false
};
console.log(sampleMemory);
