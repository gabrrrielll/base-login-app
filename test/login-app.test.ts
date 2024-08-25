import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { LoginApp } from '../src/login-app.js';
import '../src/login-app.js';

describe('LoginApp', () => {
  let element: LoginApp;
  beforeEach(async () => {
    element = await fixture(html`<login-app></login-app>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
