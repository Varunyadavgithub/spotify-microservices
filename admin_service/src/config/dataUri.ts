import DataURIParser from "datauri/parser.js";
import path from "path";

export const getBuffer = (file: any) => {
  const parser = new DataURIParser();

  const extensionName = path.extname(file.originalname).toString();

  return parser.format(extensionName, file.buffer);
};
