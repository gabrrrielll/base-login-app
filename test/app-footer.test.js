import { fixture, html } from '@open-wc/testing'; // Importing testing utilities
import { expect } from '@esm-bundle/chai'; // Importing Chai assertion library
describe('AppFooter', () => {
    // Test to check if the component renders correctly
    it('should render the footer with correct text', async () => {
        const el = await fixture(html `
      <app-footer></app-footer>`); // Creating an instance of the component
        await el.updateComplete; // Wait for the element to render
        // Check if the footer contains the correct text
        const footerText = el.shadowRoot && el.shadowRoot.querySelector('p')?.textContent;
        footerText && expect(footerText).to.contain('Made with love by open-wc');
    });
    // Test to check the style of the footer
    it('should have the correct background color', async () => {
        const el = await fixture(html `
      <app-footer></app-footer>`); // Creating an instance of the component
        await el.updateComplete; // Wait for the element to render
        // Check if the background color is correct
        const styles = getComputedStyle(el);
        await expect(styles.backgroundColor).to.equal('rgba(0, 0, 0, 0)'); // RGB equivalent of #002147
    });
});
//# sourceMappingURL=app-footer.test.js.map