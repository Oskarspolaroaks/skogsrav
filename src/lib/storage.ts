// Centralized storage URLs for website images
// These images are served from Lovable Cloud storage for optimal performance
// To update an image, upload a new version to the storage bucket via Cloud View

const STORAGE_BASE_URL = "https://ywatnlwdahywzrxpipro.supabase.co/storage/v1/object/public/website-images";

export const storageImages = {
  // Hero images
  heroFrankfurt: `${STORAGE_BASE_URL}/hero-frankfurt.jpg`,
  heroServices: `${STORAGE_BASE_URL}/hero-services.jpg`,
  heroAbout: `${STORAGE_BASE_URL}/hero-about.jpg`,
  heroVehicleRecovery: `${STORAGE_BASE_URL}/hero-vehicle-recovery.jpg`,
  
  // Section images
  europeNetwork: `${STORAGE_BASE_URL}/europe-network.jpg`,
  europeOperations: `${STORAGE_BASE_URL}/europe-operations.jpg`,
  servicesHero: `${STORAGE_BASE_URL}/services-hero.jpg`,
} as const;

export type StorageImageKey = keyof typeof storageImages;
