import app from "./app";
import AppDataSource from "./data-source";

const port = 3000;

(async () => {

    await AppDataSource.initialize()
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    
    app.listen(port, () => {
        console.log(`Server running on port ${port}!`)
    })    
})()