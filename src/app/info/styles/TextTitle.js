import styled from 'styled-components';

const TextTitle = styled.div`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 376px) {
    font-size: 16px;
  }

  flex: 1;
`;

export default TextTitle;
