import axios from 'axios';
import { Thing } from '../models/Thing';

export default class AppApi {
  client = axios.create({ baseURL: 'https://www.boredapi.com/api' });

  getThingTodo = async (): Promise<Thing> => {
    const res = await this.client.get('/activity');
    return res.data;
  };
}
