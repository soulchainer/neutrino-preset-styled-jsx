import { Neutrino } from 'neutrino';
import { validate } from 'webpack';

const setNodeEnviroment = (value) => process.env.NODE_ENV = value;

test('load preset', () => {
  expect(() => require('.')).not.toThrow();
});

test('use preset', () => {
  const neutrinoApi = Neutrino();

  expect(() => neutrinoApi.use('..')).not.toThrow();
});

test('preset is valid in production', () => {
  setNodeEnviroment('production');

  const neutrinoApi = Neutrino();
  
  neutrinoApi.use('..');

  const validationErrors = validate(neutrinoApi.config.toConfig());

  expect(validationErrors.length).toBe(0);
});

test('preset is valid in development', () => {
  setNodeEnviroment('development');

  const neutrinoApi = Neutrino();

  neutrinoApi.use('..');

  const validationErrors = validate(neutrinoApi.config.toConfig());

  expect(validationErrors.length).toBe(0);
});
