import { Account } from '../generated/v18/account/Account';
import { AccountServiceStatus } from '../generated/v18/account/AccountServiceStatus';
import { Error } from '../generated/common/Error';

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
  const result = Account.parse(validAccount);
  console.log('✓ Account validation passed');
  console.log('Parsed account:', result);
} catch (error) {
  console.error('✗ Account validation failed:', error);
}

// Test with null values
console.log('\nTesting Account schema with null...');
try {
  const nullAccount = Account.parse(null);
  console.log('✓ Null account validation passed:', nullAccount);
} catch (error) {
  console.error('✗ Null account validation failed:', error);
}

// Test AccountServiceStatus enum
console.log('\nTesting AccountServiceStatus enum...');
try {
  const status = AccountServiceStatus.parse('SERVING');
  console.log('✓ Status validation passed:', status);
} catch (error) {
  console.error('✗ Status validation failed:', error);
}

// Test invalid enum value
console.log('\nTesting invalid enum value...');
try {
  const invalidStatus = AccountServiceStatus.parse('INVALID');
  console.log('✗ Should have failed but passed:', invalidStatus);
} catch (error) {
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
  const result = Error.parse(validError);
  console.log('✓ Error validation passed');
  console.log('Parsed error:', result);
} catch (error) {
  console.error('✗ Error validation failed:', error);
}

console.log('\nAll tests completed!');
