import { MongoClient } from "mongodb";

import { seeds } from "./seeds";

async function seedDB() {
  const uri = `mongodb://mongo:27017/${
    process.env.NODE_ENV === "test" ? "test" : "prod"
  }`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const carsCollection = await client
      .db(`${process.env.NODE_ENV === "test" ? "test" : "prod"}`)
      .collection("cars");

    carsCollection.drop();

    await carsCollection.insertMany(seeds);

    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB();
