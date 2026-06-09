# Portfolio

Aplikacja mobilna na zajecia z programowania mobilnego (React Native + Expo).

## Opis

Aplikacja sluzy do prezentacji profilu studenta. Mozna tam zobaczyc dane o sobie, umiejetnosci, projekty i kontakt.

Ekrany w aplikacji:
- **Profil** - zdjecie, opis, umiejetnosci, mozna edytowac i zapisac dane
- **Projekty** - lista projektow, wyszukiwanie po nazwie, dodawanie nowych
- **Kontakt** - email, github, linkedin, lokalizacja

## Technologie

- React Native
- Expo
- TypeScript
- Expo Router (nawigacja)
- AsyncStorage (zapis danych lokalnie)
- Context API

## Uruchomienie

1. Zainstaluj zaleznosci:
```
npm install
```

2. Uruchom projekt:
```
npx expo start
```

3. Zeskanuj kod QR w aplikacji Expo Go na telefonie (Android)

## Struktura projektu

```
app/          - ekrany aplikacji
context/      - Context API (profil i projekty)
data/         - domyslne dane projektow
utils/        - funkcje do AsyncStorage
```

## Autor

Maksym Leskiv

Projekt z laboratoriow - Programowanie mobilne na IOS
