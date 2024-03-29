import { RESTDataSource, AugmentedRequest } from '@apollo/datasource-rest';
import querystring from 'querystring';
import qs from 'qs';

interface Paging<T> {
  items: T[];
  next: string;
  total: number;
  limit: number;
  offset: number;
}

export class SpotifyAPI extends RESTDataSource {
  override baseURL = process.env.SPOTIFY_API_ENDPOINT;
  private accessToken: string;

  constructor(options) {
    super(options);
    this.accessToken = options.session.accessToken;
  }

  override willSendRequest(path: string, request: AugmentedRequest) {
    request.headers['authorization'] = `Bearer ${this.accessToken}`;
  }

  async getUserTopTracks(offset: number, limit: number): Promise<Paging<any>> {
    return this.get(
      `${this.baseURL}/me/top/tracks?limit=${limit}&offset=${offset}`
    );
  }

  async getUserTopArtists(offset: number, limit: number): Promise<Paging<any>> {
    return this.get(
      `${this.baseURL}/me/top/artists?limit=${limit}&offset=${offset}`
    );
  }

  async getUserRecentlyPlayed(
    before: number,
    after?: number,
    limit?: number
  ): Promise<Paging<any>> {
    return this.get(
      `${this.baseURL}/me/player/recently-played?${qs.stringify(
        before ? { before, limit } : { after, limit }
      )}`
    );
  }

  async getArtist(id: string): Promise<any> {
    return this.get(`${this.baseURL}/artists/${id}`);
  }

  async getArtistTopTracks(id: string, market: string): Promise<any> {
    return this.get(
      `${this.baseURL}/artists/${id}/top-tracks?market=${market}`
    );
  }

  async getRelatedArtists(id: string): Promise<any> {
    return this.get(`${this.baseURL}/artists/${id}/related-artists`);
  }

  async search(query: string, type?: string): Promise<any> {
    const qs = querystring.stringify({ query, type: type || 'track' });

    return this.get(`${this.baseURL}/search?${qs}`);
  }

  async getRecommendations(
    seeds: string[],
    filters?: Record<string, any>
  ): Promise<any> {
    const str = new URLSearchParams({
      seed_tracks: seeds.join(','),
      ...filters,
    }).toString();

    return this.get(`${this.baseURL}/recommendations?${str}`);
  }

  async play(deviceId: string, uris: string[], offset?: number): Promise<void> {
    const body = offset ? { uris, offset: { position: offset } } : { uris };

    return this.put(`${this.baseURL}/me/player/play?device_id=${deviceId}`, {
      body,
    });
  }

  async toggleShuffle(deviceId: string, state: boolean): Promise<void> {
    return this.put(
      `${this.baseURL}/me/player/shuffle?device_id=${deviceId}&state=${state}`
    );
  }

  async toggleRepeat(deviceId: string, state: string): Promise<void> {
    return this.put(
      `${this.baseURL}/me/player/repeat?device_id=${deviceId}&state=${state}`
    );
  }
}

function filteredObj(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
}
