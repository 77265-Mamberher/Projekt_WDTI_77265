#Projekt Semestralny

Prosta aplikacja webowa inspirowana serwisami księgarskimi.  


const firebaseConfig = {
  apiKey:            "AIza...",
  authDomain:        "twoj-projekt.firebaseapp.com",
  projectId:         "twoj-projekt",
  storageBucket:     "twoj-projekt.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

---

### 5. Ustaw swojego admina

W pliku `js/firebase.js` znajdź linię:

```js
const ADMIN_EMAILS = ["admin@bookshelf.pl"];
```



```
bookshelf/
├── index.html       ← Główna strona: lista + wyszukiwarka + filtry
├── book.html        ← Szczegóły książki + oceny + komentarze
├── add-book.html    ← Formularz dodawania/edycji (tylko admin)
├── author.html      ← Profil autora + jego książki
├── login.html       ← Logowanie i rejestracja
├── css/
│   └── style.css    ← Wszystkie style
└── js/
    └── firebase.js  ← Konfiguracja Firebase + helpers
```