import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface NavLinkProps {
  location: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        display: inline-block;

        & + a {
          margin-left: 32px;
        }
      }
      a::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #ff872c;
        transition: width 0.5s;
      }
      a:hover::after {
        width: 100%;
      }
    }
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;
  display: inline-block;

  & + a {
    margin-left: 32px;
  }
  a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ff872c;
    transition: width 0.5s;
  }
  a:hover::after {
    width: 100%;
  }
`;
