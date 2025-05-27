import Image from 'next/image';
import { StyledHeader } from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <Image
        src="/images/logo.png"
        width={60}
        height={60}
        alt="رزومه"
        priority
      />
    </StyledHeader>
  );
}
