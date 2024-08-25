import { fixture, html } from '@open-wc/testing'; // Importing testing utilities
import { expect } from '@esm-bundle/chai'; // Importing Chai assertion library
describe('AppHeader', () => {
    // Test to check if the component renders correctly
    it('should render the header with correct title', async () => {
        const el = await fixture(html `
      <app-header></app-header>`); // Creating an instance of the component
        // Check if the title contains the correct text
        const titleText = el.shadowRoot && el.shadowRoot?.querySelector('.title h2')?.textContent;
        titleText && await expect(titleText).to.be.equal('Base Login App');
    });
    // Test to check if the logo is rendered correctly
    it('should render the logo with correct src', async () => {
        const el = await fixture(html `
      <app-header></app-header>`); // Creating an instance of the component
        // Check if the logo is rendered with the correct src
        const logoImg = el.shadowRoot && el.shadowRoot?.querySelector('.logo img');
        logoImg && expect(logoImg).to.exist;
        logoImg && await expect(logoImg?.getAttribute('src')).to.equal(new URL('../../../assets/open-wc-logo.svg', import.meta.url).href);
    });
    // Test to check the style of the header
    it('should have the correct background color', async () => {
        const el = await fixture(html `
      <app-header></app-header>`); // Creating an instance of the component
        // Check if the background color is correct
        const styles = getComputedStyle(el);
        await expect(styles.backgroundColor).to.equal('rgba(0, 0, 0, 0)');
    });
    // Test to check the text color of the header
    it('should have the correct text color', async () => {
        const el = await fixture(html `
      <app-header></app-header>`); // Creating an instance of the component
        // Check if the text color is correct
        const styles = getComputedStyle(el);
        await expect(styles.color).to.equal('rgb(0, 0, 0)'); // RGB equivalent of (#000000)
    });
});
//# sourceMappingURL=app-header.test.js.map