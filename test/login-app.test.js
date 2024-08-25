import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/login-app.js';
describe('LoginApp', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html `<login-app></login-app>`);
    });
    it('passes the a11y audit', async () => {
        await expect(element).shadowDom.to.be.accessible();
    });
});
//# sourceMappingURL=login-app.test.js.map