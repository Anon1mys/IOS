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

<img width="576" height="1280" alt="image" src="https://github.com/user-attachments/assets/57a17f24-ad63-4657-beb7-c9b64634c7be" />
<img width="576" height="1280" alt="image" src="https://github.com/user-attachments/assets/1884d9b4-97ae-41c5-be8a-d95a529885c5" />
<img width="576" height="1280" alt="image" src="https://github.com/user-attachments/assets/6d9c4995-19f1-47ca-a006-da11ab61d32c" />
<img width="576" height="1280" alt="image" src="https://github.com/user-attachments/assets/89d59bea-7229-4726-8943-a0080c481cb3" />

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
