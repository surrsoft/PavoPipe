import { ThemeProvider } from 'next-themes';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React from 'react';

/**
 * См. пример https://github.com/chakra-ui/chakra-ui/blob/main/sandbox/next-app/app/provider.tsx
 */
export function ChakraProviderIn({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider value={defaultSystem}>
        <ThemeProvider>{children}</ThemeProvider>
    </ChakraProvider>
  )
}
