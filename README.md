# Get Started

## Step 1: Kafka

Set up Kafka and Zookeeper running in local docker containers

### Kafka Docker Image

```bash
git clone https://github.com/thminggg/kafka-docker
cd kafka-docker

# Build kafka docker image and tag it as "kafka-docker"
docker build -t kafka-docker .
```

### Docker Compose

```bash
# Reference: http://wurstmeister.github.io/kafka-docker/
docker compose -f docker-compose.yml up -d
```

### Access Kafka

```bash
# Retrieve kafka container ID
docker ps

# Access with bash
docker exec -it <kafka-container-id> /bin/bash
```

### Create Topic (Optional)

```bash
# Create kafka topic with name "test-topic-2"
# Create in kafka-docker terminal
/opt/kafka/bin/kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic test-topic-2
```

### List topic

```bash
/opt/kafka/bin/kafka-topics.sh --list --zookeeper zookeeper:2181
```

### Get partition count of topic

```bash
/opt/kafka/bin/kafka-topics.sh --describe --zookeeper zookeeper:2181 --topic test-topic
```

## Step 2: Producer & Consumer

### Install Packages

```bash
yarn
```

### Create Topic

```bash
# Create kafka topic with name "test-topic"
yarn run topic:create
```

### Run Consumer

Open a terminal and run

```bash
yarn run produce
```

### Run Consumer

Open **another terminal** and run

```bash
yarn run consume
# Take seconds to for consumer to make initial connection to kafka
# Output: { value: 'Hello KafkaJS user!' }
```
