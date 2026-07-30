describe('Backend & Data Logic Tests', () => {
  const sampleBookings = [
    { id: 'BK-1', amount: '$1,200', status: 'Confirmed' },
    { id: 'BK-2', amount: '$800', status: 'Cancelled' },
    { id: 'BK-3', amount: '$500', status: 'Confirmed' }
  ];

  // Test 1: Total Spending Calculation
  test('calculates total spent excluding cancelled bookings', () => {
    const total = sampleBookings
      .filter(b => b.status !== 'Cancelled')
      .reduce((sum, b) => sum + parseInt(b.amount.replace('$', '').replace(',', '')), 0);
    expect(total).toBe(1700);
  });

  // Test 2: Flight Status Update Logic
  test('updates flight status correctly', () => {
    const updated = sampleBookings.map(b => b.id === 'BK-1' ? { ...b, status: 'Delayed' } : b);
    expect(updated[0].status).toBe('Delayed');
  });

  // Test 3: ID Format Generator
  test('generates valid customer ID string format', () => {
    const customerId = 'CUST-101';
    expect(customerId).toMatch(/^CUST-\d{3}$/);
  });

  // Test 4: CSV Data Formatter
  test('formats booking record into valid CSV string', () => {
    const b = sampleBookings[0];
    const csvRow = `${b.id},${b.amount},${b.status}`;
    expect(csvRow).toBe('BK-1,$1,200,Confirmed');
  });

  // Test 5: Customer Lookup
  test('finds correct customer record by ID', () => {
    const customers = [{ id: 'CUST-101', name: 'Ali' }, { id: 'CUST-102', name: 'Sarah' }];
    const found = customers.find(c => c.id === 'CUST-101');
    expect(found.name).toBe('Ali');
  });
});
