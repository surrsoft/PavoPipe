'use client';

import { ThemeProvider } from 'next-themes';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

/**
 * См. пример https://github.com/chakra-ui/chakra-ui/blob/main/sandbox/next-app/app/provider.tsx
 */
export function ChakraProviderIn({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <ThemeProvider attribute="data-theme" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
