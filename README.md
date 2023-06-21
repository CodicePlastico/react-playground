# Un mini ambiente React
Ho creato questo repository per avere in pochi minuti un ambiente per smanettare con React.

1) Clona il repo
2) Esegui il comando `npm install`
3) Esegui il comando `npm run dev`
4) Apri il browser a questo link: http://localhost:8000

Se tutto va bene vedrai una pagina web con il titolo "Home Page".

Il componente da cui partire è [HomePage](src/Components/HomePage.jsx)

## Cosa c'è dentro?
- React 18.2 (ultima versione al momento della predisposizione del repo)
- ReactRouter 6.8.1 (lo so è inutile, ma tanto serve sempre quindi meglio averlo subito)
- Axios 1.3.1 per chiamare eventuali API esterne
- Esbuild 0.18.6 per compilare (apre un watcher sui sorgenti non è necessario ricompilare)
- Milligram 1.4.1 come CSS di base (per avere un minimo di layout e stile)


## Come è strutturata l'applicazione
L'entry point è il file [app.jsx](src/app.jsx) che avvia l'applicazione react appoggiandosi al router per creare la mappa delle rotte disponibili. Al momento c'è solo la rotta / che mostra il componente [HomePage](src/Components/HomePage.jsx).
La pagina HTML è [index.html](src/index.html) che renderizza il template di partenza e avvia l'applicazione.
That's all...

