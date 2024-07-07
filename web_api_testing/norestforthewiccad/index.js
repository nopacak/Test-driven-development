import express from "express";
import bodyParser from "body-parser";
import spellRoutes from "./spells.js";
import userRoutes from "./user.js";

const app = express();

// config body parser to deal with JSON post bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mount the routes in spells
// off of /spells
app.use("/spells", spellRoutes);
app.use("/user", userRoutes);

// default route
app.get("/", (req, res) => {
    console.log("Request to /");
    res.json({ message: "This is not the norestforthewiccad API" });
});

console.log("Starting app on port 3000");
console.log("Point your web browser at http://localhost:3000");
app.listen(3000);
