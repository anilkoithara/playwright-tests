## Playwright Test Automation Project

```markdown
# 🧪 Playwright E2E Test Automation

This repository contains end-to-end (E2E) automated tests using [Microsoft Playwright](https://playwright.dev/), written in TypeScript.

---

## 🛠️ Setup

### 1. Clone the repo

```bash
git clone 
cd playwright-tests
````

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```ini
# .env
USER_NAME=test_username
PASSWORD=password
BASE_URL=https://your-app.com
```

**Note**: `.env` is excluded from version control in `.gitignore`.

---

## ✅ Running Tests

### Run all tests

```bash
npm run test
```
the above run script setup in package.json

or 
```bash
npx playwright test
```


### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run tests with UI (debugging)

```bash
npx playwright test --ui
```

### Run specific test file

```bash
npx playwright test tests/login.spec.ts
```

---

## 📸 Viewing Reports

### Show HTML report

```bash
npx playwright show-report
```

---

## 🧪 Example Test Command (with env)

```bash
USERNAME=admin PASSWORD=secret npx playwright test
```

---

## 🧱 Built With

* [Playwright](https://playwright.dev/)
* [TypeScript](https://www.typescriptlang.org/)

---

## 🛡️ Best Practices

* Add BDD cucumber features to make test more readable
* Modularize tests using Page Object Models
* Use `beforeEach()` to set up test preconditions
* More generic reusable functions

---

"# playwright-tests" 
