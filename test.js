// test.js

(async () => {
    try {
        const fetch = await import('node-fetch');

        const url = 'http://localhost:8080/users';
        const data = {
            Surname: 'Surname',
            Name: 'Name',
            MiddleName: 'MiddleName',
            Email: 'email@example.com'
        };

        const response = await fetch.default(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error:', error);
    }
})();
