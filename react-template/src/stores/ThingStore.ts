import { Thing } from '../models/Thing';
import { makeAutoObservable } from 'mobx';
import ThingService from '../services/ThingService';

export default class ThingStore {
  thingService: ThingService;
  thingTodo?: Thing;

  constructor (thingService: ThingService) {
    this.thingService = thingService;
    makeAutoObservable(this);
  }

  loadThingTodo = (): void => {
    this.thingService.getThingTodo().then((thing: Thing) => {
      this.thingTodo = thing;
    }).catch(error => console.error(error));
  };

  get suggestedThing (): Thing | undefined {
    return this.thingTodo;
  }
}

const thingService = new ThingService();
export const thingStore = new ThingStore(thingService);
