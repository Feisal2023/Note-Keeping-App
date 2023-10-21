// config.ts
import dotenv from "dotenv";

dotenv.config();


 export const ATLAS_URI = process.env.ATLAS_URI || "";
 export const PORT = process.env.PORT || 5000;

