import styled from '@emotion/styled';
import { Flex } from '@pearlydrive/core-ui';

export const SupplyCardWrapper = styled(Flex)({
  padding: '100px 85px 75px 85px',
  position: 'relative',
  borderRadius: '39px',
  background: 'rgba(114, 114, 144, 0.15)',
  borderTop: '2px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blue(10%)',
  flexDirection: 'column',
  gap: '50px',

  ':before': {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '0',
    width: '100%',
    height: '100%',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '39px',
  },
});
