const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Mike', 1, 'mike@example.com', 'role');

    expect(employee.name).toBe('Mike');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('mike@example.com');
    expect(employee.role).toBe('role');
});