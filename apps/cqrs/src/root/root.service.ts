import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
  async getHello(): Promise<string> {
    // const streamName = 'test-stream';

    // const events = this.client.readStream(streamName, {
    //   fromRevision: START,
    //   direction: FORWARDS,
    //   maxCount: 10,
    // });

    // for await (const resolvedEvent of events) {
    //   console.log(resolvedEvent.event?.data);
    // }

    return 'Hello World!';
  }

  async setHello(): Promise<string> {
    // const streamName = 'test-stream';

    // const event = jsonEvent({
    //   type: 'start',
    //   data: 'Hello World!'
    // });

    // await this.client.appendToStream(
    //   streamName,
    //   event,
    // );

    return 'Hello World!';
  }
}
