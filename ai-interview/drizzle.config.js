import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./utils/schema.js",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://Mock_Data_owner:npg_K8CO5wTphodI@ep-red-poetry-a1sc54pt-pooler.ap-southeast-1.aws.neon.tech/Mock_Data?sslmode=require",
  },
});
