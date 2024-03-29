import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddTrackInput = {
  artists: Array<ArtistInput>;
  duration_ms: Scalars['Int'];
  id: Scalars['ID'];
  images: Array<ImageInput>;
  name: Scalars['String'];
  preview_url?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  release_date?: Maybe<Scalars['String']>;
};

export type Artist = IArtist & {
  __typename?: 'Artist';
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type ArtistDetails = IArtist & {
  __typename?: 'ArtistDetails';
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  relatedArtists: Array<Artist>;
  topTracks: Array<Track>;
  uri: Scalars['String'];
};

export type ArtistInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AudioFiltersInput = {
  max_acousticness?: InputMaybe<Scalars['Float']>;
  max_danceability?: InputMaybe<Scalars['Float']>;
  max_energy?: InputMaybe<Scalars['Float']>;
  max_liveness?: InputMaybe<Scalars['Float']>;
  max_tempo?: InputMaybe<Scalars['Float']>;
  max_valence?: InputMaybe<Scalars['Float']>;
  min_acousticness?: InputMaybe<Scalars['Float']>;
  min_danceability?: InputMaybe<Scalars['Float']>;
  min_energy?: InputMaybe<Scalars['Float']>;
  min_liveness?: InputMaybe<Scalars['Float']>;
  min_tempo?: InputMaybe<Scalars['Float']>;
  min_valence?: InputMaybe<Scalars['Float']>;
  target_acousticness?: InputMaybe<Scalars['Float']>;
  target_danceability?: InputMaybe<Scalars['Float']>;
  target_energy?: InputMaybe<Scalars['Float']>;
  target_liveness?: InputMaybe<Scalars['Float']>;
  target_tempo?: InputMaybe<Scalars['Float']>;
  target_valence?: InputMaybe<Scalars['Float']>;
};

export type IArtist = {
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type ImageInput = {
  height?: InputMaybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addSearch: Scalars['Boolean'];
  addToSession: TrackResponse;
  createSession: Scalars['Boolean'];
  deleteSession: Scalars['Boolean'];
  generateUploadUrl: Scalars['String'];
  play: Scalars['Boolean'];
  removeFromSession: Scalars['Boolean'];
  removeSearch: Scalars['Boolean'];
  repeat: Scalars['Boolean'];
  shuffle: Scalars['Boolean'];
  updateCurrUser: User;
  updateSession: Scalars['Boolean'];
};


export type MutationAddSearchArgs = {
  seed: SeedInput;
};


export type MutationAddToSessionArgs = {
  sessionId: Scalars['String'];
  track: AddTrackInput;
};


export type MutationCreateSessionArgs = {
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationDeleteSessionArgs = {
  sessionId: Scalars['String'];
};


export type MutationGenerateUploadUrlArgs = {
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};


export type MutationPlayArgs = {
  deviceId: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  uris: Array<Scalars['String']>;
};


export type MutationRemoveFromSessionArgs = {
  sessionId: Scalars['String'];
  track: RemoveTrackInput;
};


export type MutationRemoveSearchArgs = {
  searchId: Scalars['String'];
};


export type MutationRepeatArgs = {
  deviceId: Scalars['String'];
  state: RepeatMode;
};


export type MutationShuffleArgs = {
  deviceId: Scalars['String'];
  state: Scalars['Boolean'];
};


export type MutationUpdateCurrUserArgs = {
  updates: UpdateUserInput;
};


export type MutationUpdateSessionArgs = {
  sessionId: Scalars['String'];
  updates: UpdateSessionInput;
};

export type Query = {
  __typename?: 'Query';
  artistDetails: ArtistDetails;
  currUser?: Maybe<User>;
  recommendations: Array<Track>;
  search: Array<Track>;
  session: Session;
  sessions: Array<Session>;
  userRecentlyPlayed: Array<Track>;
  userTopItems: UserTopItems;
};


export type QueryArtistDetailsArgs = {
  artistId: Scalars['String'];
  market: Scalars['String'];
};


export type QueryRecommendationsArgs = {
  filters?: InputMaybe<AudioFiltersInput>;
  seeds?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerySearchArgs = {
  query: Scalars['String'];
};


export type QuerySessionArgs = {
  sessionId: Scalars['String'];
};


export type QueryUserRecentlyPlayedArgs = {
  after?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryUserTopItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type RemoveTrackInput = {
  artists: Array<ArtistInput>;
  duration_ms: Scalars['Int'];
  id: Scalars['ID'];
  images: Array<ImageInput>;
  name: Scalars['String'];
  timestamp: Scalars['String'];
  uri: Scalars['String'];
};

export enum RepeatMode {
  Context = 'context',
  Off = 'off',
  Track = 'track'
}

export type Search = {
  __typename?: 'Search';
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  timestamp: Scalars['String'];
  type: SearchType;
};

/** Item types to search across */
export enum SearchType {
  Album = 'Album',
  Artist = 'Artist',
  Track = 'Track'
}

export type SeedInput = {
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  type: SearchType;
};

export type Session = {
  __typename?: 'Session';
  cover?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  queue: Array<TrackInQueue>;
};

/** Spotify product subscription level */
export enum Subscription {
  Free = 'free',
  Open = 'open',
  Premium = 'premium'
}

export type Track = {
  __typename?: 'Track';
  album: Album;
  artists: Array<Artist>;
  duration_ms: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  popularity?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
};

export type TrackInQueue = {
  __typename?: 'TrackInQueue';
  artists: Array<Artist>;
  duration_ms: Scalars['Int'];
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  timestamp: Scalars['String'];
  uri: Scalars['String'];
};

export type TrackResponse = {
  __typename?: 'TrackResponse';
  track: TrackInQueue;
};

export type UpdateSessionInput = {
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  explicit_content?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  display_name: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Image>;
  product?: Maybe<Subscription>;
  searches: Array<Search>;
};

export type UserTopItems = {
  __typename?: 'UserTopItems';
  topArtists: Array<Artist>;
  topTracks: Array<Track>;
};

export type AddSearchMutationVariables = Exact<{
  seed: SeedInput;
}>;


export type AddSearchMutation = { __typename?: 'Mutation', addSearch: boolean };

export type AddTrackMutationVariables = Exact<{
  sessionId: Scalars['String'];
  track: AddTrackInput;
}>;


export type AddTrackMutation = { __typename?: 'Mutation', addToSession: { __typename?: 'TrackResponse', track: { __typename?: 'TrackInQueue', id: string, name: string, duration_ms: number, uri: string, timestamp: string, artists: Array<{ __typename?: 'Artist', id: string, name: string }>, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> } } };

export type CreateSessionMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreateSessionMutation = { __typename?: 'Mutation', createSession: boolean };

export type DeleteSessionMutationVariables = Exact<{
  sessionId: Scalars['String'];
}>;


export type DeleteSessionMutation = { __typename?: 'Mutation', deleteSession: boolean };

export type GenerateUploadUrlMutationVariables = Exact<{
  filename: Scalars['String'];
  mimetype: Scalars['String'];
}>;


export type GenerateUploadUrlMutation = { __typename?: 'Mutation', generateUploadUrl: string };

export type PlayMutationVariables = Exact<{
  deviceId: Scalars['String'];
  uris: Array<Scalars['String']> | Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type PlayMutation = { __typename?: 'Mutation', play: boolean };

export type RemoveSearchMutationVariables = Exact<{
  searchId: Scalars['String'];
}>;


export type RemoveSearchMutation = { __typename?: 'Mutation', removeSearch: boolean };

export type RemoveTrackMutationVariables = Exact<{
  sessionId: Scalars['String'];
  track: RemoveTrackInput;
}>;


export type RemoveTrackMutation = { __typename?: 'Mutation', removeFromSession: boolean };

export type RepeatMutationVariables = Exact<{
  deviceId: Scalars['String'];
  state: RepeatMode;
}>;


export type RepeatMutation = { __typename?: 'Mutation', repeat: boolean };

export type ShuffleMutationVariables = Exact<{
  deviceId: Scalars['String'];
  state: Scalars['Boolean'];
}>;


export type ShuffleMutation = { __typename?: 'Mutation', shuffle: boolean };

export type UpdateCurrUserMutationVariables = Exact<{
  updates: UpdateUserInput;
}>;


export type UpdateCurrUserMutation = { __typename?: 'Mutation', updateCurrUser: { __typename?: 'User', id: string, display_name: string, email: string } };

export type UpdateSessionMutationVariables = Exact<{
  sessionId: Scalars['String'];
  updates: UpdateSessionInput;
}>;


export type UpdateSessionMutation = { __typename?: 'Mutation', updateSession: boolean };

export type ArtistQueryVariables = Exact<{
  artistId: Scalars['String'];
  market: Scalars['String'];
}>;


export type ArtistQuery = { __typename?: 'Query', artistDetails: { __typename?: 'ArtistDetails', id: string, name: string, genres: Array<string>, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }>, topTracks: Array<{ __typename?: 'Track', id: string, name: string, duration_ms: number, popularity?: number | null, preview_url?: string | null, uri: string, album: { __typename?: 'Album', id: string, name: string, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }, artists: Array<{ __typename?: 'Artist', id: string, name: string }> }>, relatedArtists: Array<{ __typename?: 'Artist', id: string, name: string, genres: Array<string>, uri: string, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }> } };

export type RecommendationsQueryVariables = Exact<{
  seeds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  filters?: InputMaybe<AudioFiltersInput>;
}>;


export type RecommendationsQuery = { __typename?: 'Query', recommendations: Array<{ __typename?: 'Track', id: string, name: string, popularity?: number | null, duration_ms: number, uri: string, preview_url?: string | null, album: { __typename?: 'Album', id: string, name: string, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }, artists: Array<{ __typename?: 'Artist', id: string, name: string }> }> };

export type SearchQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Track', id: string, name: string, duration_ms: number, uri: string, album: { __typename?: 'Album', images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }, artists: Array<{ __typename?: 'Artist', name: string }> }> };

export type SelfQueryVariables = Exact<{ [key: string]: never; }>;


export type SelfQuery = { __typename?: 'Query', currUser?: { __typename?: 'User', id: string, display_name: string, email: string, avatar: string, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }>, searches: Array<{ __typename?: 'Search', id: string, name: string, type: SearchType, imageUrl: string, timestamp: string }> } | null };

export type SessionQueryVariables = Exact<{
  sessionId: Scalars['String'];
}>;


export type SessionQuery = { __typename?: 'Query', session: { __typename?: 'Session', id: string, name: string, description?: string | null, cover?: string | null, queue: Array<{ __typename?: 'TrackInQueue', id: string, name: string, duration_ms: number, uri: string, timestamp: string, artists: Array<{ __typename?: 'Artist', id: string, name: string }>, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }> } };

export type SessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionsQuery = { __typename?: 'Query', sessions: Array<{ __typename?: 'Session', id: string, name: string, description?: string | null, cover?: string | null }> };

export type UserRecentlyPlayedQueryVariables = Exact<{
  before?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type UserRecentlyPlayedQuery = { __typename?: 'Query', userRecentlyPlayed: Array<{ __typename?: 'Track', id: string, name: string, duration_ms: number, uri: string, album: { __typename?: 'Album', images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }, artists: Array<{ __typename?: 'Artist', id: string, name: string }> }> };

export type UserTopItemsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type UserTopItemsQuery = { __typename?: 'Query', userTopItems: { __typename?: 'UserTopItems', topTracks: Array<{ __typename?: 'Track', id: string, name: string, duration_ms: number, uri: string, album: { __typename?: 'Album', images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }, artists: Array<{ __typename?: 'Artist', id: string, name: string }> }>, topArtists: Array<{ __typename?: 'Artist', id: string, name: string, genres: Array<string>, uri: string, images: Array<{ __typename?: 'Image', url: string, width?: number | null, height?: number | null }> }> } };


export const AddSearchDocument = gql`
    mutation AddSearch($seed: SeedInput!) {
  addSearch(seed: $seed)
}
    `;
export type AddSearchMutationFn = Apollo.MutationFunction<AddSearchMutation, AddSearchMutationVariables>;

/**
 * __useAddSearchMutation__
 *
 * To run a mutation, you first call `useAddSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSearchMutation, { data, loading, error }] = useAddSearchMutation({
 *   variables: {
 *      seed: // value for 'seed'
 *   },
 * });
 */
export function useAddSearchMutation(baseOptions?: Apollo.MutationHookOptions<AddSearchMutation, AddSearchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSearchMutation, AddSearchMutationVariables>(AddSearchDocument, options);
      }
export type AddSearchMutationHookResult = ReturnType<typeof useAddSearchMutation>;
export type AddSearchMutationResult = Apollo.MutationResult<AddSearchMutation>;
export type AddSearchMutationOptions = Apollo.BaseMutationOptions<AddSearchMutation, AddSearchMutationVariables>;
export const AddTrackDocument = gql`
    mutation AddTrack($sessionId: String!, $track: AddTrackInput!) {
  addToSession(sessionId: $sessionId, track: $track) {
    track {
      id
      name
      artists {
        id
        name
      }
      images {
        url
        width
        height
      }
      duration_ms
      uri
      timestamp
    }
  }
}
    `;
export type AddTrackMutationFn = Apollo.MutationFunction<AddTrackMutation, AddTrackMutationVariables>;

/**
 * __useAddTrackMutation__
 *
 * To run a mutation, you first call `useAddTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTrackMutation, { data, loading, error }] = useAddTrackMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      track: // value for 'track'
 *   },
 * });
 */
export function useAddTrackMutation(baseOptions?: Apollo.MutationHookOptions<AddTrackMutation, AddTrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTrackMutation, AddTrackMutationVariables>(AddTrackDocument, options);
      }
export type AddTrackMutationHookResult = ReturnType<typeof useAddTrackMutation>;
export type AddTrackMutationResult = Apollo.MutationResult<AddTrackMutation>;
export type AddTrackMutationOptions = Apollo.BaseMutationOptions<AddTrackMutation, AddTrackMutationVariables>;
export const CreateSessionDocument = gql`
    mutation CreateSession($name: String!, $description: String) {
  createSession(name: $name, description: $description)
}
    `;
export type CreateSessionMutationFn = Apollo.MutationFunction<CreateSessionMutation, CreateSessionMutationVariables>;

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(CreateSessionDocument, options);
      }
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>;
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>;
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<CreateSessionMutation, CreateSessionMutationVariables>;
export const DeleteSessionDocument = gql`
    mutation DeleteSession($sessionId: String!) {
  deleteSession(sessionId: $sessionId)
}
    `;
export type DeleteSessionMutationFn = Apollo.MutationFunction<DeleteSessionMutation, DeleteSessionMutationVariables>;

/**
 * __useDeleteSessionMutation__
 *
 * To run a mutation, you first call `useDeleteSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSessionMutation, { data, loading, error }] = useDeleteSessionMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useDeleteSessionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSessionMutation, DeleteSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSessionMutation, DeleteSessionMutationVariables>(DeleteSessionDocument, options);
      }
export type DeleteSessionMutationHookResult = ReturnType<typeof useDeleteSessionMutation>;
export type DeleteSessionMutationResult = Apollo.MutationResult<DeleteSessionMutation>;
export type DeleteSessionMutationOptions = Apollo.BaseMutationOptions<DeleteSessionMutation, DeleteSessionMutationVariables>;
export const GenerateUploadUrlDocument = gql`
    mutation GenerateUploadUrl($filename: String!, $mimetype: String!) {
  generateUploadUrl(filename: $filename, mimetype: $mimetype)
}
    `;
export type GenerateUploadUrlMutationFn = Apollo.MutationFunction<GenerateUploadUrlMutation, GenerateUploadUrlMutationVariables>;

/**
 * __useGenerateUploadUrlMutation__
 *
 * To run a mutation, you first call `useGenerateUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateUploadUrlMutation, { data, loading, error }] = useGenerateUploadUrlMutation({
 *   variables: {
 *      filename: // value for 'filename'
 *      mimetype: // value for 'mimetype'
 *   },
 * });
 */
export function useGenerateUploadUrlMutation(baseOptions?: Apollo.MutationHookOptions<GenerateUploadUrlMutation, GenerateUploadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateUploadUrlMutation, GenerateUploadUrlMutationVariables>(GenerateUploadUrlDocument, options);
      }
export type GenerateUploadUrlMutationHookResult = ReturnType<typeof useGenerateUploadUrlMutation>;
export type GenerateUploadUrlMutationResult = Apollo.MutationResult<GenerateUploadUrlMutation>;
export type GenerateUploadUrlMutationOptions = Apollo.BaseMutationOptions<GenerateUploadUrlMutation, GenerateUploadUrlMutationVariables>;
export const PlayDocument = gql`
    mutation Play($deviceId: String!, $uris: [String!]!, $offset: Int) {
  play(deviceId: $deviceId, uris: $uris, offset: $offset)
}
    `;
export type PlayMutationFn = Apollo.MutationFunction<PlayMutation, PlayMutationVariables>;

/**
 * __usePlayMutation__
 *
 * To run a mutation, you first call `usePlayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playMutation, { data, loading, error }] = usePlayMutation({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *      uris: // value for 'uris'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function usePlayMutation(baseOptions?: Apollo.MutationHookOptions<PlayMutation, PlayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlayMutation, PlayMutationVariables>(PlayDocument, options);
      }
export type PlayMutationHookResult = ReturnType<typeof usePlayMutation>;
export type PlayMutationResult = Apollo.MutationResult<PlayMutation>;
export type PlayMutationOptions = Apollo.BaseMutationOptions<PlayMutation, PlayMutationVariables>;
export const RemoveSearchDocument = gql`
    mutation RemoveSearch($searchId: String!) {
  removeSearch(searchId: $searchId)
}
    `;
export type RemoveSearchMutationFn = Apollo.MutationFunction<RemoveSearchMutation, RemoveSearchMutationVariables>;

/**
 * __useRemoveSearchMutation__
 *
 * To run a mutation, you first call `useRemoveSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSearchMutation, { data, loading, error }] = useRemoveSearchMutation({
 *   variables: {
 *      searchId: // value for 'searchId'
 *   },
 * });
 */
export function useRemoveSearchMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSearchMutation, RemoveSearchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSearchMutation, RemoveSearchMutationVariables>(RemoveSearchDocument, options);
      }
export type RemoveSearchMutationHookResult = ReturnType<typeof useRemoveSearchMutation>;
export type RemoveSearchMutationResult = Apollo.MutationResult<RemoveSearchMutation>;
export type RemoveSearchMutationOptions = Apollo.BaseMutationOptions<RemoveSearchMutation, RemoveSearchMutationVariables>;
export const RemoveTrackDocument = gql`
    mutation RemoveTrack($sessionId: String!, $track: RemoveTrackInput!) {
  removeFromSession(sessionId: $sessionId, track: $track)
}
    `;
export type RemoveTrackMutationFn = Apollo.MutationFunction<RemoveTrackMutation, RemoveTrackMutationVariables>;

/**
 * __useRemoveTrackMutation__
 *
 * To run a mutation, you first call `useRemoveTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTrackMutation, { data, loading, error }] = useRemoveTrackMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      track: // value for 'track'
 *   },
 * });
 */
export function useRemoveTrackMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTrackMutation, RemoveTrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTrackMutation, RemoveTrackMutationVariables>(RemoveTrackDocument, options);
      }
export type RemoveTrackMutationHookResult = ReturnType<typeof useRemoveTrackMutation>;
export type RemoveTrackMutationResult = Apollo.MutationResult<RemoveTrackMutation>;
export type RemoveTrackMutationOptions = Apollo.BaseMutationOptions<RemoveTrackMutation, RemoveTrackMutationVariables>;
export const RepeatDocument = gql`
    mutation Repeat($deviceId: String!, $state: RepeatMode!) {
  repeat(deviceId: $deviceId, state: $state)
}
    `;
export type RepeatMutationFn = Apollo.MutationFunction<RepeatMutation, RepeatMutationVariables>;

/**
 * __useRepeatMutation__
 *
 * To run a mutation, you first call `useRepeatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRepeatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [repeatMutation, { data, loading, error }] = useRepeatMutation({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useRepeatMutation(baseOptions?: Apollo.MutationHookOptions<RepeatMutation, RepeatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RepeatMutation, RepeatMutationVariables>(RepeatDocument, options);
      }
export type RepeatMutationHookResult = ReturnType<typeof useRepeatMutation>;
export type RepeatMutationResult = Apollo.MutationResult<RepeatMutation>;
export type RepeatMutationOptions = Apollo.BaseMutationOptions<RepeatMutation, RepeatMutationVariables>;
export const ShuffleDocument = gql`
    mutation Shuffle($deviceId: String!, $state: Boolean!) {
  shuffle(deviceId: $deviceId, state: $state)
}
    `;
export type ShuffleMutationFn = Apollo.MutationFunction<ShuffleMutation, ShuffleMutationVariables>;

/**
 * __useShuffleMutation__
 *
 * To run a mutation, you first call `useShuffleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShuffleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shuffleMutation, { data, loading, error }] = useShuffleMutation({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useShuffleMutation(baseOptions?: Apollo.MutationHookOptions<ShuffleMutation, ShuffleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShuffleMutation, ShuffleMutationVariables>(ShuffleDocument, options);
      }
export type ShuffleMutationHookResult = ReturnType<typeof useShuffleMutation>;
export type ShuffleMutationResult = Apollo.MutationResult<ShuffleMutation>;
export type ShuffleMutationOptions = Apollo.BaseMutationOptions<ShuffleMutation, ShuffleMutationVariables>;
export const UpdateCurrUserDocument = gql`
    mutation UpdateCurrUser($updates: UpdateUserInput!) {
  updateCurrUser(updates: $updates) {
    id
    display_name
    email
  }
}
    `;
export type UpdateCurrUserMutationFn = Apollo.MutationFunction<UpdateCurrUserMutation, UpdateCurrUserMutationVariables>;

/**
 * __useUpdateCurrUserMutation__
 *
 * To run a mutation, you first call `useUpdateCurrUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurrUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCurrUserMutation, { data, loading, error }] = useUpdateCurrUserMutation({
 *   variables: {
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateCurrUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCurrUserMutation, UpdateCurrUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCurrUserMutation, UpdateCurrUserMutationVariables>(UpdateCurrUserDocument, options);
      }
export type UpdateCurrUserMutationHookResult = ReturnType<typeof useUpdateCurrUserMutation>;
export type UpdateCurrUserMutationResult = Apollo.MutationResult<UpdateCurrUserMutation>;
export type UpdateCurrUserMutationOptions = Apollo.BaseMutationOptions<UpdateCurrUserMutation, UpdateCurrUserMutationVariables>;
export const UpdateSessionDocument = gql`
    mutation UpdateSession($sessionId: String!, $updates: UpdateSessionInput!) {
  updateSession(sessionId: $sessionId, updates: $updates)
}
    `;
export type UpdateSessionMutationFn = Apollo.MutationFunction<UpdateSessionMutation, UpdateSessionMutationVariables>;

/**
 * __useUpdateSessionMutation__
 *
 * To run a mutation, you first call `useUpdateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSessionMutation, { data, loading, error }] = useUpdateSessionMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateSessionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSessionMutation, UpdateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSessionMutation, UpdateSessionMutationVariables>(UpdateSessionDocument, options);
      }
export type UpdateSessionMutationHookResult = ReturnType<typeof useUpdateSessionMutation>;
export type UpdateSessionMutationResult = Apollo.MutationResult<UpdateSessionMutation>;
export type UpdateSessionMutationOptions = Apollo.BaseMutationOptions<UpdateSessionMutation, UpdateSessionMutationVariables>;
export const ArtistDocument = gql`
    query Artist($artistId: String!, $market: String!) {
  artistDetails(artistId: $artistId, market: $market) {
    id
    name
    genres
    images {
      url
      width
      height
    }
    topTracks {
      id
      name
      album {
        id
        name
        images {
          url
          width
          height
        }
      }
      artists {
        id
        name
      }
      duration_ms
      popularity
      preview_url
      uri
    }
    relatedArtists {
      id
      name
      genres
      images {
        url
        width
        height
      }
      uri
    }
  }
}
    `;

/**
 * __useArtistQuery__
 *
 * To run a query within a React component, call `useArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistQuery({
 *   variables: {
 *      artistId: // value for 'artistId'
 *      market: // value for 'market'
 *   },
 * });
 */
export function useArtistQuery(baseOptions: Apollo.QueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
      }
export function useArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, options);
        }
export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>;
export type ArtistLazyQueryHookResult = ReturnType<typeof useArtistLazyQuery>;
export type ArtistQueryResult = Apollo.QueryResult<ArtistQuery, ArtistQueryVariables>;
export const RecommendationsDocument = gql`
    query Recommendations($seeds: [String!], $filters: AudioFiltersInput) {
  recommendations(seeds: $seeds, filters: $filters) {
    id
    name
    album {
      id
      name
      images {
        url
        width
        height
      }
    }
    artists {
      id
      name
    }
    popularity
    duration_ms
    uri
    preview_url
  }
}
    `;

/**
 * __useRecommendationsQuery__
 *
 * To run a query within a React component, call `useRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendationsQuery({
 *   variables: {
 *      seeds: // value for 'seeds'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useRecommendationsQuery(baseOptions?: Apollo.QueryHookOptions<RecommendationsQuery, RecommendationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecommendationsQuery, RecommendationsQueryVariables>(RecommendationsDocument, options);
      }
export function useRecommendationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecommendationsQuery, RecommendationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecommendationsQuery, RecommendationsQueryVariables>(RecommendationsDocument, options);
        }
export type RecommendationsQueryHookResult = ReturnType<typeof useRecommendationsQuery>;
export type RecommendationsLazyQueryHookResult = ReturnType<typeof useRecommendationsLazyQuery>;
export type RecommendationsQueryResult = Apollo.QueryResult<RecommendationsQuery, RecommendationsQueryVariables>;
export const SearchDocument = gql`
    query Search($searchTerm: String!) {
  search(query: $searchTerm) {
    id
    name
    album {
      images {
        url
        width
        height
      }
    }
    artists {
      name
    }
    duration_ms
    uri
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export const SelfDocument = gql`
    query Self {
  currUser {
    id
    display_name
    email
    avatar
    images {
      url
      width
      height
    }
    searches {
      id
      name
      type
      imageUrl
      timestamp
    }
  }
}
    `;

/**
 * __useSelfQuery__
 *
 * To run a query within a React component, call `useSelfQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelfQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelfQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelfQuery(baseOptions?: Apollo.QueryHookOptions<SelfQuery, SelfQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelfQuery, SelfQueryVariables>(SelfDocument, options);
      }
export function useSelfLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelfQuery, SelfQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelfQuery, SelfQueryVariables>(SelfDocument, options);
        }
export type SelfQueryHookResult = ReturnType<typeof useSelfQuery>;
export type SelfLazyQueryHookResult = ReturnType<typeof useSelfLazyQuery>;
export type SelfQueryResult = Apollo.QueryResult<SelfQuery, SelfQueryVariables>;
export const SessionDocument = gql`
    query Session($sessionId: String!) {
  session(sessionId: $sessionId) {
    id
    name
    description
    cover
    queue {
      id
      name
      artists {
        id
        name
      }
      images {
        url
        width
        height
      }
      duration_ms
      uri
      timestamp
    }
  }
}
    `;

/**
 * __useSessionQuery__
 *
 * To run a query within a React component, call `useSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionQuery({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useSessionQuery(baseOptions: Apollo.QueryHookOptions<SessionQuery, SessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
      }
export function useSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionQuery, SessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
        }
export type SessionQueryHookResult = ReturnType<typeof useSessionQuery>;
export type SessionLazyQueryHookResult = ReturnType<typeof useSessionLazyQuery>;
export type SessionQueryResult = Apollo.QueryResult<SessionQuery, SessionQueryVariables>;
export const SessionsDocument = gql`
    query Sessions {
  sessions {
    id
    name
    description
    cover
  }
}
    `;

/**
 * __useSessionsQuery__
 *
 * To run a query within a React component, call `useSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionsQuery(baseOptions?: Apollo.QueryHookOptions<SessionsQuery, SessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionsQuery, SessionsQueryVariables>(SessionsDocument, options);
      }
export function useSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionsQuery, SessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionsQuery, SessionsQueryVariables>(SessionsDocument, options);
        }
export type SessionsQueryHookResult = ReturnType<typeof useSessionsQuery>;
export type SessionsLazyQueryHookResult = ReturnType<typeof useSessionsLazyQuery>;
export type SessionsQueryResult = Apollo.QueryResult<SessionsQuery, SessionsQueryVariables>;
export const UserRecentlyPlayedDocument = gql`
    query UserRecentlyPlayed($before: Int, $after: Int, $limit: Int) {
  userRecentlyPlayed(before: $before, after: $after, limit: $limit) {
    id
    name
    album {
      images {
        url
        width
        height
      }
    }
    artists {
      id
      name
    }
    duration_ms
    uri
  }
}
    `;

/**
 * __useUserRecentlyPlayedQuery__
 *
 * To run a query within a React component, call `useUserRecentlyPlayedQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserRecentlyPlayedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserRecentlyPlayedQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUserRecentlyPlayedQuery(baseOptions?: Apollo.QueryHookOptions<UserRecentlyPlayedQuery, UserRecentlyPlayedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserRecentlyPlayedQuery, UserRecentlyPlayedQueryVariables>(UserRecentlyPlayedDocument, options);
      }
export function useUserRecentlyPlayedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserRecentlyPlayedQuery, UserRecentlyPlayedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserRecentlyPlayedQuery, UserRecentlyPlayedQueryVariables>(UserRecentlyPlayedDocument, options);
        }
export type UserRecentlyPlayedQueryHookResult = ReturnType<typeof useUserRecentlyPlayedQuery>;
export type UserRecentlyPlayedLazyQueryHookResult = ReturnType<typeof useUserRecentlyPlayedLazyQuery>;
export type UserRecentlyPlayedQueryResult = Apollo.QueryResult<UserRecentlyPlayedQuery, UserRecentlyPlayedQueryVariables>;
export const UserTopItemsDocument = gql`
    query UserTopItems($offset: Int, $limit: Int) {
  userTopItems(offset: $offset, limit: $limit) {
    topTracks {
      id
      name
      album {
        images {
          url
          width
          height
        }
      }
      artists {
        id
        name
      }
      duration_ms
      uri
    }
    topArtists {
      id
      name
      genres
      images {
        url
        width
        height
      }
      uri
    }
  }
}
    `;

/**
 * __useUserTopItemsQuery__
 *
 * To run a query within a React component, call `useUserTopItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTopItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTopItemsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUserTopItemsQuery(baseOptions?: Apollo.QueryHookOptions<UserTopItemsQuery, UserTopItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserTopItemsQuery, UserTopItemsQueryVariables>(UserTopItemsDocument, options);
      }
export function useUserTopItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserTopItemsQuery, UserTopItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserTopItemsQuery, UserTopItemsQueryVariables>(UserTopItemsDocument, options);
        }
export type UserTopItemsQueryHookResult = ReturnType<typeof useUserTopItemsQuery>;
export type UserTopItemsLazyQueryHookResult = ReturnType<typeof useUserTopItemsLazyQuery>;
export type UserTopItemsQueryResult = Apollo.QueryResult<UserTopItemsQuery, UserTopItemsQueryVariables>;