import {
  EventStoreDBClient,
  FORWARDS,
  START,
} from '@eventstore/db-client';

const client = EventStoreDBClient.connectionString(
  'esdb://127.0.0.1:2113?tls=false'
);

const connect = async () => {
  try {
    await client.readAll({
      direction: FORWARDS,
      fromPosition: START,
      maxCount: 1,
    })
  } catch (error) {
    console.error('Error connecting to EventStoreDB:', error)
  }
 }

export {
  client, connect
};
