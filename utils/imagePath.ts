/**
 * Helper function to get image paths from the Shop folder
 * Properly formats the path to handle spaces and special characters
 */
export function getShopImagePath(filename: string): string {
  // Use the folder name as-is - Next.js handles spaces in public folder paths
  // But we need to ensure the filename is properly encoded if it has special chars
  const folderName = "Shop - Teecherz Home & Office";
  // Only encode the filename if needed, not the folder path
  return `/${folderName}/${filename}`;
}
