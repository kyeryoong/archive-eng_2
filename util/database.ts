import { MongoClient } from "mongodb";

const url = process.env.URL;
const options: any = { useNewUrlParser: true };

let connectDB: any;

if (url) {
    if (process.env.NODE_ENV === "development") {
        let globalWithMongoClientPromise = global as typeof globalThis & {
            _mongo: Promise<MongoClient>;
        };
    
        if (!globalWithMongoClientPromise ._mongo) {
            globalWithMongoClientPromise._mongo = new MongoClient(url, options).connect();
        }
        connectDB = globalWithMongoClientPromise._mongo;
    }
    
    else {
        connectDB = new MongoClient(url, options).connect();
    }
}

export { connectDB }