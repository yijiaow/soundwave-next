import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';

export const getAccessToken = async (code: string | string[]) => {
  const encoded = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  return fetch(process.env.SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    body: querystring.stringify({
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    }),
    headers: {
      Authorization: `Basic ${encoded}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => res.json());
};

export const refreshAccessToken = async (refreshToken: string) => {
  const encoded = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  return fetch(process.env.SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    headers: {
      Authorization: `Basic ${encoded}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => res.json());
};

export const getSelf = async (accessToken: string) => {
  return fetch(`${process.env.SPOTIFY_API_ENDPOINT}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};
