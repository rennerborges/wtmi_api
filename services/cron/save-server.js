/* eslint-disable no-console */
import axios from 'axios';
import dotenv from 'dotenv';
import cronValues from './values-cron';
import { CronSchedule } from './util';

dotenv.config({ path: './variables.env' });

async function SendRequestSaveServer() {
  const url = `${process.env.URL_SERVER}/`;

  const { data } = await axios({
    method: 'get',
    url,
  });

  console.log('Salvei o servidor!', url);
  console.log('data:', data);
}

export default CronSchedule(cronValues.EVERY_15_MINUTES, SendRequestSaveServer);
