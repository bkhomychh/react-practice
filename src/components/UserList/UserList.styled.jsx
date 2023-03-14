import styled from 'styled-components';

export const StyledUserList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  list-style: none;
`;

export const StyledUser = styled.li`
  width: 400px;
  margin: 0 auto;

  font-size: 18px;
  font-weight: 500;
  color: black;
`;

export const StyledButtonList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;

  list-style: none;
`;

export const StyledButton = styled.button`
  padding: 5px 10px;

  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px red;
  }
`;
