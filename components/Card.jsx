import Image from 'next/image';
import Link from 'next/link';
import * as S from '../src/styles/styles';

export default function Card() {
  return (
    <Link href="/archive" passHref>
      <S.BlogCard>
        <S.BlogCardHeader>
          <Image src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg" width="150" height="150" alt="" />
        </S.BlogCardHeader>
        <S.BlogCardBody>
          <h4>The Majestic and Wonderful Bahamas</h4>
          <p>
            The best kept secret of The Bahamas is the country&apos;s sheer size and diversity.
            With 16 major islands, The Bahamas is an unmatched destination
          </p>
        </S.BlogCardBody>
      </S.BlogCard>
    </Link>
  );
}
