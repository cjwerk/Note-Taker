const path = require("path");
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes.htmlRoute");
const app = express();
const PORT = process.env.PORT || 3001;

const middlewares = [express.static(path.join(__dirname, "public"))];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(middlewares);

app.listen(PORT, () => console.log(`Listening on PORT : ${PORT}`));
