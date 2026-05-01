const expr = require("express");
const app = expr();

app.use(expr.urlencoded({ extended: false }));

// Serve two.html content directly
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Login Page</title>
        </head>
        <body >
            <h2>Login Form</h2>
            <form action="/check" method="post">
                <input type="text" name="uname" placeholder="Username" required><br><br>
                <input type="password" name="password" placeholder="Password" required><br><br>
                <button type="submit">Login</button>
            </form>
        </body>
        </html>
    `);
});

// Authentication Middleware
app.post("/check", (req, res, next) => {
    const u1 = req.body.uname;
    const p1 = req.body.password;   

    if (u1 === "admin" && p1 === "1234") {
        next();  // go to next handler
    } else {
        res.send(`
            <h1 style="color:red; text-align:center;">
                Invalid Username or Password
            </h1>
            <div style="text-align:center;">
                <a href="/">Go Back</a>
            </div>
        `);
    }
});

app.post("/check", (req, res) => {
    res.send("<h1 style='color:green; text-align:center;'>Login Successful</h1>");
});

app.listen(7002, () => {
    console.log("Server running on http://localhost:7002");
});
