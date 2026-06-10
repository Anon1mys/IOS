# Portfolio

Aplikacja mobilna na iOS zrobiona w **React Native** i **Expo** (nie native Swift/Xcode).

Projekt z zajec laboratoryjnych - Programowanie mobilne na iOS.

## Opis

Aplikacja prezentuje profil studenta - dane osobowe, umiejetnosci, projekty i kontakt. Dane zapisuja sie lokalnie w AsyncStorage.

## Ekrany

**Profil**
- zdjecie, imie, krotki opis
- lista umiejetnosci
- formularz do edycji profilu i zapisu zmian

**Projekty**
- lista projektow jako karty
- wyszukiwanie po nazwie
- szczegoly projektu po kliknieciu
- formularz dodawania nowego projektu
- usuwanie projektu

**Kontakt**
- email, GitHub, LinkedIn
- lokalizacja: Katowice
- przyciski do wyslania maila i otwarcia linkow

## Zrzuty ekranu

TODO: dodac screenshoty z symulatora iOS / Expo Go

## Technologie

- React Native
- Expo
- TypeScript
- Expo Router
- AsyncStorage
- Context API

## Uruchomienie

```
npm install
npx expo start
```

Potem:
- zeskanuj kod QR w aplikacji Expo Go na telefonie
- albo uruchom projekt w symulatorze iOS (wymaga Maca)

## Struktura

```
app/       - ekrany
context/   - stan profilu i projektow
data/      - domyslne projekty
utils/     - AsyncStorage
```

## Autor

Maksym Leskiv
