import { StyledLoading } from './styles';

interface LoadingProps {
  size: number;
}

export default function Loading({ size }: LoadingProps) {
  return (
    <StyledLoading style={{ width: size, height: size }}>
      <div />
      <div />
    </StyledLoading>
  );
}
