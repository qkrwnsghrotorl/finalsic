"use strict";

// PORT
const PORT = 3000;

const app = require("../app")

app.listen(PORT, () => {
    console.log("서버 가동");
})