# Czechy na luzie

Responsywna, statyczna strona internetowa o Czechach: atrakcjach turystycznych, ciekawostkach i praktycznych informacjach dla osób planujących wyjazd. Projekt powstał jako praca domowa z przedmiotu Aplikacje internetowe.

**🔗 Strona na żywo:** [https://bavtek.github.io/aplikacje_internetowe_praca_domowa_1/](https://bavtek.github.io/aplikacje_internetowe_praca_domowa_1/)

## Opis projektu

Strona przedstawia Czechy w lekkiej, luźnej formie. Znajdziesz na niej:

- sekcję powitalną z zachętą do zwiedzania,
- licznik odliczający czas do wakacji,
- katalog atrakcji (miasta, zabytki, przyroda) z możliwością filtrowania,
- galerię zdjęć,
- sekcję FAQ z odpowiedziami na najczęstsze pytania podróżnych.

Całość jest dostosowana do komputerów i urządzeń mobilnych.

## Funkcjonalności JavaScript

- **Licznik do wakacji**: odlicza dni, godziny, minuty i sekundy do 1 lipca (po tej dacie przechodzi automatycznie na kolejny rok).
- **Filtrowanie atrakcji**: przyciski pozwalają pokazać wszystkie atrakcje lub tylko wybraną kategorię.
- **Rozwijane FAQ**: kliknięcie pytania pokazuje lub ukrywa odpowiedź (z obsługą `aria-expanded`).
- **Responsywne menu**: na małych ekranach menu zamienia się w hamburger, zamykany przyciskiem, klawiszem Esc lub kliknięciem w link.
- **Przycisk powrotu na górę**: pojawia się po przewinięciu strony w dół.

## Wykorzystane technologie

- **HTML5**: semantyczna struktura strony (`header`, `nav`, `main`, `section`, `article`, `footer`),
- **CSS3**: zmienne CSS, Flexbox, CSS Grid, media queries, animacje i efekty `:hover`,
- **JavaScript (ES6)**: interaktywność bez użycia bibliotek,
- **Git i GitHub**: kontrola wersji,
- **GitHub Pages**: publikacja strony.

## Struktura projektu

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── ...            # zdjęcia użyte na stronie
└── README.md
```

## Źródło zdjęć

Zdjęcia pochodzą z serwisu [Pexels](https://www.pexels.com).

## Autor

Bartłomiej Topyła