import styled from 'styled-components';

const Content = styled.div`
  width: 40%;
  margin: 15px 0;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 440px) {
    width: 90%;
  }
`;

export default Content;
