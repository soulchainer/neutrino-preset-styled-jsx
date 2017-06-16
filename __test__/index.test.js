import { validate } from 'webpack';
import { Neutrino } from 'neutrino';

test('loads preset', () => {
  expect(() => require('..')).not.toThrow();
});

test('uses preset', () => {
  const api = Neutrino();

  expect(() => api.use(require('..'))).not.toThrow();
});

test('valid preset production', () => {
  process.env.NODE_ENV = 'production';
  const api = Neutrino();
  
  api.use(require('..'));

  const errors = validate(api.config.toConfig());

  expect(errors.length).toBe(0);
});

test('valid preset development', () => {
  process.env.NODE_ENV = 'development';
  const api = Neutrino();

  api.use(require('..'));

  const errors = validate(api.config.toConfig());

  expect(errors.length).toBe(0);
});
