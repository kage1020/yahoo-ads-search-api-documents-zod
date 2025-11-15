import { account } from '../generated/v18/account/Account';
import { accountServiceStatus } from '../generated/v18/account/AccountServiceStatus';
import { error } from '../generated/common/Error';

// Test Account schema
console.log('Testing Account schema...');

const validAccount = {
  accountId: 123456789,
  accountName: 'Test Account',
  accountStatus: 'SERVING',
  accountType: 'PREPAY',
  autoTaggingEnabled: 'TRUE',
  deliveryStatus: 'ACTIVE',
  isTestAccount: 'FALSE',
  isCancellationPending: 'FALSE',
  startDate: '20240101',
  endDate: '20241231',
  isMccAccount: 'FALSE',
  contactBizId: 'test-biz-id'
};

try {
  const result = account.parse(validAccount);
  console.log('✓ Account validation passed');
  console.log('Parsed account:', result);
} catch (err) {
  console.error('✗ Account validation failed:', err);
}

// Test with null values
console.log('\nTesting Account schema with null...');
try {
  const nullAccount = account.parse(null);
  console.log('✓ Null account validation passed:', nullAccount);
} catch (err) {
  console.error('✗ Null account validation failed:', err);
}

// Test AccountServiceStatus enum
console.log('\nTesting AccountServiceStatus enum...');
try {
  const status = accountServiceStatus.parse('SERVING');
  console.log('✓ Status validation passed:', status);
} catch (err) {
  console.error('✗ Status validation failed:', err);
}

// Test invalid enum value
console.log('\nTesting invalid enum value...');
try {
  const invalidStatus = accountServiceStatus.parse('INVALID');
  console.log('✗ Should have failed but passed:', invalidStatus);
} catch (err) {
  console.log('✓ Correctly rejected invalid enum value');
}

// Test Error schema
console.log('\nTesting Error schema...');
const validError = {
  code: 'INVALID_REQUEST',
  message: 'The request is invalid',
  details: [
    {
      requestKey: 'accountId',
      requestValue: 'invalid-value'
    }
  ]
};

try {
  const result = error.parse(validError);
  console.log('✓ Error validation passed');
  console.log('Parsed error:', result);
} catch (err) {
  console.error('✗ Error validation failed:', err);
}

console.log('\nAll tests completed!');
