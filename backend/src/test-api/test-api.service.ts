import { Injectable } from '@nestjs/common';

@Injectable()
export class TestApiService {
  private data = { key1: 'value1', key2: 'value2' };

  getData() {
    return this.data;
  }
}
