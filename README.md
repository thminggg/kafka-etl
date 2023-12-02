## Kafka ETL

This is a mono-repository of a backend server proceses messages from Kafka to perform ETL task with a frontend web app to visualize the process.

## Getting Started

### Prerequisite

1. Install Docker Engine (https://docs.docker.com/engine/install/)
2. Install Yarn (https://www.npmjs.com/package/yarn)
3. Build a Kafka image in local [Kafka Docker Image](packages/kafka//README.md#kafka-docker-image)

```bash
git clone https://github.com/thminggg/kafka-docker && \
cd kafka-docker && \
docker build -t kafka-docker . && \
cd .. && \
rm -rf kafka-docker
```

### Install npm packages:

```bash
yarn
```

### Run the development server:

```bash
yarn run start
```

### Produce message in Kafka:

Open a browser or Rest API client and make a GET request to URL:

```
http://localhost:9000/produce
```

### Consume message shown in console:

Logs showing in console

```
[0] ------------------------ Start of message ------------------------
[0]  Consumer: Received producer message { value: 'Producer: Produced message to Kafka' }
[0]  Consumer: Transform data into base64...
[0]  Consumer: Transformed data: UHJvZHVjZXI6IFByb2R1Y2VkIG1lc3NhZ2UgdG8gS2Fma2E=
[0]  Consumer: Saving transformed data to DB...
[0]  Consumer: Completed!
[0] ------------------------ End of message ------------------------
```
