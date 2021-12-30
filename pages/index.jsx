import Card from '../components/Card';
import * as S from '../src/styles/styles';

export default function Home() {
  return (
    <S.FlexRowContainer>
      <Card />
      <Card />
      <Card />
    </S.FlexRowContainer>
  );
}
