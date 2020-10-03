# Use JSX in your Adonis 5 app with or instead "Edge" template system

## Why?

- Styled components (write styles inside your component)
- Full support JSX and React philosophy (without SPA - only SSR)
- Typescript autocomplete in your .tsx files
- Better experience for template building!

## What was done here?

- adonisrc.json (added Jsx alias)
- tsconfig.json (added "jsx": "react" in compilerOptions)
- maked directory "jsx" with example pages and components
- maked two routes in start/routes.ts
- maked PagesController.ts
- added contracts/jsxContract.ts
- added App/Services/JsxService.ts
