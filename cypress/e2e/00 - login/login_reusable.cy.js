describe('Scenario Login', () => {
    const validCredentials = { email: 'admintesting@admin.com', password: 'password12' };
    const invalidCredentials = { email: 'adminsalahtesting@admin.com', password: 'password12' };
    const invalidCredentialsPassword = { email: 'admintesting@admin.com', password: 'password' };

    beforeEach(() => {
        cy.visit('admin/login');
    });

    const testCases = [
        {
            title: 'Testcase 1 login dengan username dan password valid data',
            data: validCredentials,
            expectedUrl: '/admin/dashboard',
            expectedMessage: 'Selamat, Anda berhasil Login',
        },
        {
            title: 'Testcase 2 login dengan email dan password invalid data',
            data: invalidCredentials,
            expectedUrl: '/admin/login',
            expectedMessage: 'Email ada yang salah',
        },

        {
            title : 'Testcase 3 Login dengan email valid dan password invalid',
            data: invalidCredentialsPassword,
            expectedUrl: '/admin/login',
            expectedMessage: 'password nya ada yang salah',
        }

    ];

    testCases.forEach(({ title, data, expectedUrl, expectedMessage }) => {
        it(title, () => {
            cy.login(data.email, data.password);
            // Tunggu 3 detik sebelum melanjutkan
            cy.wait(2000);
      
            if (expectedUrl) {
              // Verifikasi URL jika login berhasil
              cy.url().should('include', expectedUrl);
            }
      
            if (expectedMessage) {
              // Verifikasi pesan kesalahan atau sukses
              cy.contains(expectedMessage).should('be.visible');
            }
        });
    });

});