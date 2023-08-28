import app from "./app.js";
import dotenv from "dotenv"; // Use 'import dotenv from "dotenv";'
import connect from "./config/db.js";

dotenv.config();

connect();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  // Use 'PORT' instead of 'process.env.PORT'
  console.log(`Server is running on port ${PORT}`);
});
