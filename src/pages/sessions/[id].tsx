import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { BsPlayCircleFill } from 'react-icons/bs';
import { useSessionQuery, usePlayMutation } from '../../__generated__/types';
import { getServerSideProps as serverProps } from '../../lib/getServerSideProps';
import { useDevice } from '../../contexts/DeviceContext';
import Layout from '../../components/shared/Layout';
import Playlist from '../../components/Playlist';
import Player from '../../components/Player';

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  > div:last-child {
    display: flex;
    flex: 1;
  }
`;

const SessionInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 0;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.green};

  h1 {
    margin: 0;
    margin-right: 0.5em;
    font-size: 3.5rem;
    font-weight: bold;
  }

  p {
    margin-right: 1rem;
    opacity: 0.5;
  }
`;

const SessionHead = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const PlayIconWrapper = styled.div<{ enabled: boolean }>`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  box-shadow: 0 10px 15px ${({ theme }) => theme.shadow.dark};
  background-color: white;
  opacity: 1;

  .play-icon {
    width: 100%;
    height: 100%;
    fill: ${({ enabled, theme }) =>
      enabled ? theme.colors.spotifyGreen : theme.colors.disabled};
    cursor: pointer;
  }
`;

const PlayerContainer = styled.div`
  width: ${({ theme }) => theme.columns(4)};
  border-left: 1.5px solid ${({ theme }) => theme.colors.green};
`;

const Session: React.FC<{ sessionId: string }> = ({ sessionId }) => {
  const device = useDevice();

  const { data, loading } = useSessionQuery({ variables: { sessionId } });
  const [play] = usePlayMutation();

  const uris = data?.session.queue.map((track) => track.uri);
  const playSession = () => {
    if (!device || !uris || uris.length === 0) return;

    play({
      variables: { deviceId: device.id, uris },
    });
  };

  if (loading) return <p>Loading...</p>;

  if (!data?.session) return null;

  return (
    <Layout>
      {data?.session && (
        <Container>
          <SessionInfo>
            <SessionHead>
              <h1>{data.session.name}</h1>
              <PlayIconWrapper enabled={!!device}>
                <BsPlayCircleFill onClick={playSession} className="play-icon" />
              </PlayIconWrapper>
            </SessionHead>
            <p>{data.session.description || ''}</p>
          </SessionInfo>
          <div style={{ width: '100%' }}>
            <Playlist queue={data.session.queue} sessionId={sessionId} />
            <PlayerContainer>
              <Player queue={data.session.queue} />
            </PlayerContainer>
          </div>
        </Container>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { sessionId: context.params?.id },
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { props } = await serverProps(context.req, context.res);

//   return {
//     props: {
//       ...props,
//       ...{ sessionId: context.params?.id },
//     },
//   };
// };

export default Session;
