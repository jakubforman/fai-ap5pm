<p align="center">
    <img alt="Ionic" src="https://github.com/ionic-team/ionic-framework/blob/main/.github/assets/logo.png?raw=true" width="60" style="margin: 20px" />
    <img alt="Angular" src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" height="60" style="margin: 20px" />
</p>

<h1 align="center">
  AP5PM - Ionic Angular
</h1>

Projekt pro výuku mobilních aplikací na Univerzitě Tomáše Bati (Fakulta aplikované informatiky).

## Orientace v projektu

- Jednotlové branche jsou pojmenovány podle hodin kdy studenti chodí na cvičení.
- Jednotlivé commity jsou přidávány podle cvičení, které proběhlo a souhrně obsahuje vše, co bylo přidáno nebo
  modifikováno.

## Oficiální dokumentace

- [Ionic Framework](https://ionicframework.com/)
- [Angular Framework](https://angular.io/)

## Instalace projektu

1. Naklonujte si REPO (`branch`, kterou potřebujete)
2. Otevřte projekt ve vámi zvoleném IDE a v příkazovém rádku
3. Nainstalujte všechny NPM knihovny - `npm install`
4. Nastavit svůj API klíč pro [Open Weather Map](https://openweathermap.org)
   v [src/environments/environment.ts](src/environments/environment.ts)
   a  [src/environments/environment.prod.ts](src/environments/environment.prod.ts).
5. (* pokud půjde update na Firebase) Upravit ID aplikace pro firebase v [src/.firebaserc](src/.firebaserc)
6. Spusťte Ionic dev server pomocí `ionic serve`

## Android build

> **První kroky**
> 
> Je nutné mít nainstalované androidstudio s validmíni SDK a souhlasy všech licenčních podmínek.
> 
> Doporučuji první otevřít nativní projekt v Android studiu a následně spouštět tento 
> projekt pokud před ním neexistoval žáedný Android projekt. Dojde tak namapování cest 
> SDK a dalších důležitých částí Android studia.
> 
> [Oficiální dokumentace](https://ionicframework.com/docs/developing/android)

1. Spustit `ionic cap sync android --prod` je nutné míst nastavn API klíč v [src/environments/environment.prod.ts](src/environments/environment.prod.ts). 
2. Otevřít Android studio nebo `ionic open android` (**otevírá se složka [android](android) - kde je android projekt!**)
3. Spustit na reálném zařízení nebo emulátoru.

## Firebase

Ofciální dokumentace [Angular/pwa - Ionic](https://ionicframework.com/docs/angular/pwa)

### Login Init

1. npm install -g firebase-tools - nainstaluje firebase do počítače
2. firebase login - přihlásí uživatele
3. firebase init - init projektu pro firebase

### Upload

1. ionic build --prod - build produkční verze
2. firebase deploy - upload produkční (poslední build verze) ze složky www na server firebase


