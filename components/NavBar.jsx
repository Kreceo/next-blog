import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import * as S from '../src/styles/styles';

const Nav = styled.nav`
  width: 100%;
  box-shadow: 0px 1px 10px 0px var(--melon);
  margin-bottom: 40px;

  div {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 10px 10px;

    img {
      border-radius: 100%;
    }

    ul {
      display: flex;
      align-items: center;
      list-style: none;

      li {
        padding-right: 30px;

        a {
          text-decoration: none;
          color: var(--text-color);
          font-size: 14px;
        }
      }
    }
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <div>
        <Image src="https://via.placeholder.com/50" width="50" height="50" alt="logo" />
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/archive"><a>Blogs</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
          <S.PrimaryBtn>A button</S.PrimaryBtn>
        </ul>
      </div>
    </Nav>
  );
}
