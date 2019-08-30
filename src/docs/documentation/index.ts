import {
  HttpClient
} from "aurelia-fetch-client";

import {autoinject} from 'aurelia-framework';

@autoinject
export class Index {

  private items: {name: string, components}
  constructor(readonly client: HttpClient) {
    console.log(client);

  }

  async attached() {
    let resp = await this.client.fetch('output/components.json'),
      items = await resp.json();

    this.items = items.index;
  }


}