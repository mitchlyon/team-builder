const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', 2, 'bob@example.com', 'Engineer', 'bobgithub');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe('bob@example.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('bobgithub');
});