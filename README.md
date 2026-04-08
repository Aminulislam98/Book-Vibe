# 📚 Book Vibe

A modern book discovery and management Single Page Application (SPA) built with React 19. Browse books, track your reading list, manage your wishlist, and visualize reading data through interactive charts — all in the browser with zero backend required.

## 🌐 Live Demo

[https://your-live-link.netlify.app](https://your-live-link.netlify.app)

## ✨ Features

- 🏠 **Home Page** — Responsive book grid with cover, title, author, rating, tags & category
- 📖 **Book Details** — Full book info: publisher, pages, review, category, language, audiobook details
- ✅ **Read List** — Mark books as read with smart duplicate prevention
- 💜 **Wishlist** — Save books to read later with remove functionality
- 🔃 **Sorting** — Sort read/wishlist by rating or total pages using `useMemo`
- 📊 **Data Visualization** — Area chart showing wishlist books by page count (Recharts)
- 💾 **Persistent Storage** — All data saved in `localStorage`, survives page refresh
- 📱 **Fully Responsive** — Mobile-first design, hamburger nav, responsive grid & chart
- 🎨 **Dark Theme UI** — Radial gradient background with purple, green & pink accents

---

## 🛠️ Tech Stack

| Technology        | Version | Purpose                                 |
| ----------------- | ------- | --------------------------------------- |
| React             | 19.2.4  | UI library (uses new `use()` hook)      |
| Vite              | 8.0.1   | Build tool & dev server                 |
| React Router      | 7.14.0  | Client-side routing with loader pattern |
| React Context API | —       | Global state management                 |
| localStorage      | —       | Client-side data persistence            |
| Recharts          | 3.8.1   | Interactive area chart visualization    |
| Tailwind CSS      | 4.2.2   | Utility-first CSS framework             |
| DaisyUI           | 5.5.19  | Pre-built Tailwind component library    |
| React Icons       | 5.6.0   | Icon library (FA, Feather, etc.)        |
| React Tabs        | 6.1.1   | Tabbed interface component              |

---

## 📁 Project Structure
