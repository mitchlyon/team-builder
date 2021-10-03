const Manager = require('../lib/Manager');

test('creates an engineer object', () => {
    const manager = new Manager('Jim', 4, 'jim@example.com', 'Manager', 111-111-1111);

    expect(manager.name).toBe('Jim');
    expect(manager.id).toEqual(4);
    expect(manager.email).toBe('jim@example.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe(111-111-1111);
});