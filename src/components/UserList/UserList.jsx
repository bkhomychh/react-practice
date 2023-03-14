import {
  StyledUserList,
  StyledUser,
  StyledButtonList,
  StyledButton,
} from './UserList.styled';

export const UserList = ({ users, deleteUser, openModal, changeJobStatus }) => {
  return (
    <StyledUserList>
      {users.map(({ id, name, email, hasJob, avatar }) => {
        return (
          <StyledUser key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Has job: {`${hasJob}`}</p>
            {/* <img src={avatar} alt={name} /> */}

            <StyledButtonList>
              <li>
                <StyledButton
                  onClick={() => openModal({ src: avatar, alt: name })}
                >
                  Show avatar
                </StyledButton>
              </li>
              <li>
                <StyledButton onClick={() => changeJobStatus(id)}>
                  Change job status
                </StyledButton>
              </li>
              <li>
                <StyledButton onClick={() => deleteUser(id)}>
                  Delete
                </StyledButton>
              </li>
            </StyledButtonList>
          </StyledUser>
        );
      })}
    </StyledUserList>
  );
};
