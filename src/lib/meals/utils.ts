import path from "path";
import fs from "fs/promises";

const ROOT_FOLDER_NAME = "public";
const IMAGES_FOLDER_NAME = "images";

export function getImageFileServePath(fileName: string) {
  return path.join("/", IMAGES_FOLDER_NAME, fileName);
}

function getImageFilePathToSave(fileName: string) {
  return path.join(ROOT_FOLDER_NAME, IMAGES_FOLDER_NAME, fileName);
}

export async function saveImageFile(fileName: string, file: File) {
  const fileContent = await file.arrayBuffer();
  const bufferedFileContent = Buffer.from(fileContent);
  return fs.writeFile(getImageFilePathToSave(fileName), bufferedFileContent);
}
