const { Kafka } = require("kafkajs");
run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:29092"],
    });

    const admin = kafka.admin();
    console.log("Connecting.....");
    await admin.connect;
    console.log("Connected!");
    await admin.createTopics({
      topics: [{ topic: "Users", numPartitions: 2 }],
    });
    console.log("Created Successfully!");
  } catch (error) {
  } finally {
    process.exit(0);
  }
}
