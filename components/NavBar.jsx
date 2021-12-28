import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import * as S from '../src/styles/styles';

const Nav = styled.nav`
  width: 100%;
  padding: 20px 0px 20px 0px;
  box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.08),0px 20px 14px -18px rgba(0,0,0,0.08);

  .inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      list-style: none;

      li {
        padding-right: 30px;

        a {
          text-decoration: none;
        }
      }
    }
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <div className="inner">
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
