const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { swaggerSpec } = require("./swagger/swagger");
require("dotenv").config();
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Somos Más API",
            versoin: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    }, apis: ["./routes/*.js"]
};



const usersRouter = require("./routes/users.routes");
const newsRouter = require("./routes/news.routes");
const categoriesRouter = require("./routes/categories.routes");
const organizationRouter = require("./routes/organization.routes");
const authRouter = require("./routes/auth.routes");
const activitiesRouter = require("./routes/activities.routes");
const testimonialsRouter = require("./routes/testimonials.routes");
const slidesRouter = require("./routes/slides.routes");
const membersRouter = require("./routes/members.routes");
const contactsRouter = require("./routes/contacts.routes");
const commentsRouter = require("./routes/comments.routes");
const postsRouter = require("./routes/posts.routes");

const app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerOptions)));

//app.use(authMiddleware);

app.use("/news-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.use("/users", usersRouter);
app.use("/news", newsRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
app.use("/activities", activitiesRouter);
app.use("/organization", organizationRouter);
app.use("/testimonials", testimonialsRouter);
app.use("/slides", slidesRouter);
app.use("/members", membersRouter);
app.use("/contacts", contactsRouter);
app.use("/comments", commentsRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
