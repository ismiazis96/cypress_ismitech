describe('Logout valid proses', () => {

    it('Logout success', () => {
        cy.visit('/admin/login');
        cy.get('[name="email"]').type('admintesting@admin.com');
        cy.get('[name="password"]').type('password12');

        cy.get('button[type=submit]').click();
        cy.url().should('include', '/admin/dashboard');
        cy.contains('Selamat, Anda berhasil Login').should('be.visible');

        cy.get('.rounded-circle').click();
        cy.get('[href="http://blogcompany.test/admin/login/logout"]').click();
        cy.url().should('include', '/admin/login');
        cy.contains('Berhasil Keluar').should('be.visible');

    });
})