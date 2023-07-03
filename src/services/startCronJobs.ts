import axios from 'axios';
import cron from 'node-cron';
import { cronJobs } from '../config/cronJobs';
import StreamrClient from 'streamr-client';

export const startCronJobs = () => {
  const streamr = new StreamrClient({
    auth: {
      privateKey: process.env.PRIVATE_KEY || '',
    },
  });

  cronJobs.forEach(({ url, schedule, streamId, refineFunc }) => {
    cron.schedule(schedule, async () => {
      try {
        const response = await axios.get(url);
        console.log('API response received');

        const data = refineFunc ? refineFunc(response.data) : response.data;
        await streamr.publish(streamId, data);
        console.log(`${data} published to streamId ${streamId}`);
      } catch (error) {
        console.error('Something went wrong:', error);
      }
    });
  });
};
