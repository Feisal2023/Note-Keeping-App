import express from "express";
import cors from "cors";
import noteRoutes from "./routes";
import connectBD from "./config/db";
const app = express();

app.use(cors(
  {
  origin: ["https://note-keeping-app-au7w.vercel.app/"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}
));
app.use(express.json());
app.use(noteRoutes);

connectBD();

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
