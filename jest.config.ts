import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  moduleNameMapper: {
    // Transforma importações de arquivos de estilo em um mock
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',

    // Permite usar caminhos absolutos com @, como import x from '@/components/X'
    '^@/(.*)$': '<rootDir>/$1',
  },

  // Define o ambiente de teste como o DOM do navegador (emulado via jsdom)
  // Necessário para testar componentes React com render, click, etc.
  testEnvironment: 'jest-environment-jsdom',

  // Define como transformar arquivos TypeScript (ts/tsx) para o Jest entender
  // Usa o `ts-jest` para compilar TypeScript durante os testes
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default createJestConfig(customJestConfig);
