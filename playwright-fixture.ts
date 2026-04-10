import { test as base, expect } from '@playwright/test';
import "@testing-library/jest-dom";

export const test = base.extend({
  // Custom fixtures can be added here
});

export { expect };


