import styled from '@emotion/styled';
import { Text, useTheme } from '@nextui-org/react';
import { KBarToggleButton, ThemeSwitch } from 'core';
import { blogName } from 'core/constants';
import Link from 'next/link';

function MainHeader() {
  const { theme } = useTheme();

  return (
    <Header>
      <H1 h1 css={{ textGradient: `45deg, ${theme.colors.text.value} -20%, ${theme.colors.primary.value} 70%` }}>
        <Link href="/">
          <a dangerouslySetInnerHTML={{ __html: blogName }}></a>
        </Link>
      </H1>
      <ButtonWrapper>
        <ThemeSwitch />
        <KBarToggleButton />
      </ButtonWrapper>
    </Header>
  );
}

export default MainHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.875rem;
`;

const H1 = styled(Text)`
  margin: 0;
  font-size: 6rem;
  line-height: 6rem;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  gap: 0.5rem;
  display: flex;
`;
