import { describe, it, expect } from 'vitest';
import {
  incrementCounter,
  resetCounter,
  createCounterController
} from '../../src/app.js';

describe('counter helpers', () => {
  it('increments a numeric value', () => {
    expect(incrementCounter(1)).toBe(2);
  });

  it('resets the value to zero', () => {
    expect(resetCounter()).toBe(0);
  });
});

describe('counter controller', () => {
  it('keeps state between calls', () => {
    const controller = createCounterController(2);

    expect(controller.getValue()).toBe(2);
    expect(controller.increment()).toBe(3);
    expect(controller.getValue()).toBe(3);
    expect(controller.reset()).toBe(0);
  });
});
