const express = require("express");
const app = express();
const hbs = require("hbs");
const compression = require("compression");
const path = require("path");
const viewPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");
const publicPath = path.join(__dirname, "./public");
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(express.static(publicPath));
hbs.registerPartials(partialsPath);
app.set("view engine", "hbs");
app.set("views", viewPath);
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/", (req, res) => res.render("home"));

app.get("*", (req, res) => res.status(404).render("404"));

// httpAuth = (req, res, next) => {
//     const auth = { login: "login", password: "pass" };
//     const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
//     const [login, password] = Buffer.from(b64auth, "base64")
//         .toString()
//         .split(":");
//     if (
//         login &&
//         password &&
//         login === auth.login &&
//         password === auth.password
//     ) {
//         return next();
//     }
//     res.set("WWW-Authenticate", 'Basic realm="401"');
//     res.status(401).send(
//         "Authentication Required"
//     );
// };

app.listen(PORT, () => console.log(`server started`));
