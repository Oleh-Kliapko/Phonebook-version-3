import { NavLink } from 'react-router-dom';
import { Box, useColorMode } from '@chakra-ui/react';

export const NavItem = ({ title, to }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as={NavLink}
      fontSize="2xl"
      _activeLink={
        colorMode === 'dark'
          ? { color: 'red.200', borderBottom: '2px' }
          : { color: 'red.500', borderBottom: '2px' }
      }
      to={to}
    >
      {title}
    </Box>
  );
};
