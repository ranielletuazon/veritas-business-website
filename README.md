# Veritas Business (prototype)

Clickable front-end prototype of a business marketplace for **Singapore** and the **Philippines**:
businesses for sale, franchises, and advisors/lenders. No backend, database or login: all data is fictional sample data.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type check + production build
npm run lint     # oxlint
```

## Where things live

| Path | What |
| --- | --- |
| `src/App.tsx` | All routes |
| `src/pages/` | One file per page; pages assemble components and read data |
| `src/components/` | Reusable components (`ui/` = customised shadcn/ui) |
| `src/assets/data/` | Sample data: each `.json` has a `.ts` file that types it and exports helper functions |
| `src/types/` | TypeScript interfaces for the data |
| `src/config/site.ts` | Site name, tagline, nav links, demo note, demo exchange rate (used by the SGD/PHP switcher) |
| `src/config/options.ts` | Filter choices and labels (price ranges, sort options, deal types) |
| `src/lib/` | Small helpers (currency conversion and formatting, filter matching) |
| `src/hooks/` | `useQueryFilters` (filters in the URL), `useCurrency` (selected currency + price formatting) |
| `src/context/` | React context that holds the selected display currency |
| `src/index.css` | Theme colours (change `--primary` to rebrand) |

## Adding data

- **New listing / franchise / advisor:** add an object to the matching JSON file in `src/assets/data/`.
- **New category:** add it to `categories.json` with a `hue` (0–360) and an `icon` name listed in `src/components/CategoryIcon.tsx`.
- **Real API later:** replace the functions in the `src/assets/data/*.ts` files; pages only call those functions.
