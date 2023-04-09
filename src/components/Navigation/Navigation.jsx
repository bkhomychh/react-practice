import { useLocation } from 'react-router-dom';
import { StyledLink } from './Navigation.styled';

const Navigation = () => {
  const { pathname } = useLocation();

  const shouldRenderHeader = !pathname.includes('details');

  return (
    <>
      {shouldRenderHeader && (
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home </StyledLink>
            </li>
            <li>
              <StyledLink to="events">Event</StyledLink>
            </li>
            <li>
              <StyledLink to="search">Search</StyledLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
