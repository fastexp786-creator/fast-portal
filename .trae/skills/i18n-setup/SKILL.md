---
name: "i18n-setup"
description: "Sets up internationalization (i18n) for Next.js projects with multi-language support. Invoke when user wants to add multiple languages like English, Urdu, Arabic to their website."
---

# i18n Setup Skill

This skill helps implement internationalization (i18n) in Next.js projects with support for multiple languages including RTL languages like Urdu and Arabic.

## Features
- Next.js i18n configuration with routing
- Language switcher component
- RTL (Right-to-Left) support for Arabic and Urdu
- Translation file management
- Database considerations for multilingual content

## Implementation Steps
1. Configure next-i18next or next-intl for routing
2. Create language switcher component
3. Add translation files for each language
4. Update database schema for multilingual content
5. Test RTL layout support

## Common Languages
- English (en) - LTR
- Urdu (ur) - RTL  
- Arabic (ar) - RTL
- Hindi (hi) - LTR
- French (fr) - LTR

## File Structure
```
locales/
  en/
    common.json
    dashboard.json
  ur/
    common.json
    dashboard.json
  ar/
    common.json
    dashboard.json
```