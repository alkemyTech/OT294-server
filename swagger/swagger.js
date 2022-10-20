const path = require("path");
const swaggerSpec = {
    definition: {
        openapi:"3.0.3",
        info: {
            title: "Endpoints novedades",
            version: "1.0.0"
        },
        servers:[
            {
                url: "http://localhost:3000",
            }
        ]
    },
    apis: [`${path.join(__dirname, "../swagger/news.swagger.json")}`],
};

module.exports = { swaggerSpec };