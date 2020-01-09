describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /contact', () => {
		cy.get('nav a').contains('contact').click();
		cy.url().should('include', '/contact');
	});

	// it('navigates to /blog', () => {
	// 	cy.get('nav a').contains('blog').click();
	// 	cy.url().should('include', '/blog');
	// });
});