const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Bob', 3, 'bob@example.com', 'Intern', 'Coding Bootcamp');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(3);
    expect(intern.email).toBe('bob@example.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('Coding Bootcamp');
});