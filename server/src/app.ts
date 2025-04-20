import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import cookieParser from "cookie-parser";
import { AuthRoutes } from "./app/modules/auth/auth.route";
import { UserRoutes } from "./app/modules/user/user.route";
import { ListingRoutes } from "./app/modules/listing/listing.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"] }));

// application routes
// app.use("/api/v1", router);
app.use("/auth", AuthRoutes);
app.use("/users", UserRoutes);
app.use("/listings", ListingRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Second Pick app running!");
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
