# Validation Commands

From a customer project with the CLI available:

```bash
npx nextf-contract validate
```

Inside the NEXT F Contracts repository/private package:

```bash
node bin/nextf-contract.mjs validate starters/documentation/nextf.site.json --verbose
node bin/nextf-contract.mjs compatibility starters/documentation/nextf.site.json --json
```

Validation must not mutate or upgrade the manifest. Record the command, CLI version, exit code, warnings and errors in `CONTRACT-RESOLUTION-SUMMARY.md`.
