import styled from 'styled-components';

const ErrorMessage = styled.div`
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #ffdddd;
  color: #721c24;
`;

interface Props {
  error: any;
}

const Error: React.FC<Props> = ({ error }) => {
  return (
    <ErrorMessage>
      <p>
        <strong>Error:</strong> {error.message}
      </p>
    </ErrorMessage>
  );
};

export default Error;
