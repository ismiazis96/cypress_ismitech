/* 
Skenario Testing Login
1. Testcase 1 login dengan username dan password valid data
2. Testcase 2 login dengan username dan password tidak valid data
3. Testcase 3 login dengan username kosong
4. Testcase 4 login dengan password kosong
5. Testcase 5 login dengan username dan password tidak ada
*/

describe('Scenario Login', () => {
    beforeEach(() => {
        // Buka halaman login sebelum setiap tes
        cy.visit('/admin/login'); // Ganti URL dengan halaman login aplikasi Anda
      });

    it('Testcase 1 login dengan username dan password valid data', () => {

      // cari elemen
      cy.get('input[name="email"]').type('admintesting@admin.com');
      cy.get('input[name="password"]').type('password12');

      // klik tombol login
      cy.get('button[type=submit]').click();

      // verifikasi jika sudah berhasil login
      cy.url().should('include', '/admin/dashboard');
      cy.contains('Selamat, Anda berhasil Login').should('be.visible');
    });

    it.skip('Testcase 2 login dengan username dan password tidak valid data', () => {
        // cari elemen
        cy.get('input[name="email"]').type('admin@admin.com');
        cy.get('input[name="password"]').type('passwordsalah');

        // klik tombol login
        cy.get('button[type=submit]').click();

        cy.contains('Email ada yang salah').should('be.visible');
    });

    it.skip('Testcase 3 login dengan email kosong', () => {
        cy.get('input[name="email"]').focus().blur();
        cy.get('input[name="password"]').type('password12');

        // klik tombol login
        cy.get('button[type=submit]').click();
    });

    it.skip('Testcase 4 login dengan password kosong', () => {
        cy.get('input[name="email"]').type('admintesting@admin.com');
        cy.get('input[name="password"]').focus().blur();
        cy.get('button[type=submit]').click();
    });

    it.skip('Testcase 5 login dengan username dan password tidak ada', () => {
        cy.get('input[name="email"]').focus().blur();
        cy.get('input[name="password"]').focus().blur();
        cy.get('button[type=submit]').click();
    });


  });