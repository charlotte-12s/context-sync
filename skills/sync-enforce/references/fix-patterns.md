# Fix Patterns

Common violation fix patterns. Use these as templates when suggesting fixes.

## Naming Fixes

### Fix: Convert to camelCase
```python
# Before
def get_user_data():
    user_name = "Alice"

# After
def getUserData():
    userName = "Alice"
```

### Fix: Convert to snake_case
```javascript
// Before
function getUserData() {
  const userName = "Alice";
}

// After
function get_user_data() {
  const user_name = "Alice";
}
```

### Fix: Convert file to kebab-case
```
Before: src/UserProfile.tsx
After:  src/user-profile.tsx
```

### Fix: Convert file to PascalCase
```
Before: src/user-profile.tsx
After:  src/UserProfile.tsx
```

## Tech Stack Fixes

### Fix: Replace unapproved import with project dependency
```diff
- import axios from 'axios';
+ const response = await fetch('/api/users');
```

### Fix: Replace unapproved library with project equivalent
```diff
- import dayjs from 'dayjs';
+ import { format } from 'date-fns';  // project uses date-fns
```

## Directory Fixes

### Fix: Move file to correct location
```
Before: src/utils.test.ts
After:  tests/utils.test.ts
```

```
Before: components/Button.tsx
After:  src/components/Button.tsx
```

## Code Style Fixes

### Fix: Indentation (2 spaces → 4 spaces)
```javascript
// Before
if (true) {
  doSomething();
}

// After
if (true) {
    doSomething();
}
```

### Fix: Quote style (double → single)
```diff
- const name = "Alice";
+ const name = 'Alice';
```

### Fix: Import order
```diff
- import { Button } from './components';
- import React from 'react';
- import fs from 'fs';
+ import fs from 'fs';
+ import React from 'react';
+ import { Button } from './components';
```

### Fix: Add semicolons
```diff
- const x = 1
- const y = 2
+ const x = 1;
+ const y = 2;
```

### Fix: Remove semicolons
```diff
- const x = 1;
- const y = 2;
+ const x = 1
+ const y = 2
```

### Fix: Line length
```diff
- const result = someVeryLongFunctionName(firstArgument, secondArgument, thirdArgument, fourthArgument);
+ const result = someVeryLongFunctionName(
+   firstArgument,
+   secondArgument,
+   thirdArgument,
+   fourthArgument,
+ );
```

## Config Compliance Fixes

### Fix: Trailing whitespace
```diff
- const x = 1;
+ const x = 1;
```

### Fix: Final newline
```
Add a newline at the end of the file if insert_final_newline = true in .editorconfig
```

### Fix: Line endings (CRLF → LF)
```
Convert all \r\n to \n if end_of_line = lf in .editorconfig
```
