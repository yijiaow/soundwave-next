import { AuthenticationError } from 'apollo-server-micro';
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

interface Paging<T> {
  items: T[];
  next: string;
  total: number;
  limit: number;
  offset: number;
}

export class SpotifyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SPOTIFY_API_ENDPOINT;
  }

  willSendRequest(request: RequestOptions) {
    if (!this.context.authSession?.accessToken)
      throw new AuthenticationError('You must be logged in with Spotify');

    request.headers.set(
      'Authorization',
      `Bearer ${this.context.authSession.accessToken}`
    );
  }

  async getUserTopTracks(offset: number, limit: number): Promise<Paging<any>> {
    return this.get(
      `${this.baseURL}/me/top/tracks?limit=${limit}&offset=${offset}`
    );
  }

  async getUserTopArtists(offset: number, limit: number): Promise<Paging<any>> {
    console.log('OFFSET', offset, 'LIMIT', limit);
    return this.get(
      `${this.baseURL}/me/top/artists?limit=${limit}&offset=${offset}`
    );
  }

  async getUserTopArtists(
    offset = 0 as number,
    limit = 20 as number
  ): Promise<Paging<any>> {
    return this.get(`${this.baseURL}/me/top/artists`);
  }
}
