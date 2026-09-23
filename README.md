# SJP Search — Cloudflare Workers

Lokalne źródła dwóch zasobów Cloudflare:

- `apps/site` — statyczna strona `sjp-search`,
- `apps/proxy` — Worker `sjp-search-proxy`, pobierający aktualny plik odmian SJP.

Adresy produkcyjne:

- <https://sjp-search.domel76.workers.dev/>
- <https://sjp-search-proxy.domel76.workers.dev/>

## Instalacja

```powershell
npm install
```

## Uruchomienie lokalne

Strona:

```powershell
npm run dev:site
```

Proxy:

```powershell
npm run dev:proxy
```

## Weryfikacja bez wdrożenia

```powershell
npm run check
```

## Wdrożenie

Pojedynczy Worker:

```powershell
npm run deploy:site
npm run deploy:proxy
```

Oba Workery, najpierw proxy, potem strona:

```powershell
npm run deploy
```

Przed wdrożeniem uruchom `npm run check` i przejrzyj zmienione pliki.
