import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(3000, () => {
    console.log(`Server is running on ${PORT}`);
  });
})();
