import { Deserializable } from '../interfaces';

export class SessionToken implements Deserializable {
  token: string;
  expiration: string;
  tokeRefresh: string;
  expirationRefresh: string;

  constructor() {
    this.token = null;
    this.expiration = null;
    this.tokeRefresh = null;
    this.expirationRefresh = null;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
