import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  label {
    color: #fff;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    padding: 16px;
    border: 1px solid #fff;
    border-radius: 4px;
    outline: 0;
    background: transparent;
    color: #fff;

    ::placeholder {
      color: #fff;
    }
  }
`;
