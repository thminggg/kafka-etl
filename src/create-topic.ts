import kafka from "./services/kafka";

const createTopic = async () => {
  const admin = kafka.admin();
  await admin.connect();
  await admin.createTopics({
    topics: [
      {
        topic: "test-topic",
        numPartitions: 1,
        replicationFactor: 1,
        replicaAssignment: [], // Example: [{ partition: 0, replicas: [0,1,2] }] - default: []
        configEntries: [], // Example: [{ name: 'cleanup.policy', value: 'compact' }] - default: []
      },
    ],
  });
  await admin.disconnect();
};

createTopic();
