import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { LoginApp } from '../src/login-app.js';
import '../src/login-app.js';

describe('LoginApp', () => {
  let element: LoginApp;
  beforeEach(async () => {
    element = await fixture(html`<login-app></login-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
