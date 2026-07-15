# 🧮 Professional Modern Calculator

A sleek, responsive, and feature-rich calculator built with **SvelteKit**, **TypeScript**, and **Tailwind CSS**. Designed with a focus on clean UI/UX, accessibility, and modern web standards.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Svelte](https://img.shields.io/badge/Svelte-4.2.7-orange.svg)](https://svelte.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC.svg)](https://tailwindcss.com/)

---

## 🚀 Overview

This project is a high-performance web-based calculator that demonstrates modern frontend development practices. It solves the common problem of needing a quick, accessible, and reliable calculation tool that works seamlessly across all devices.

### Key Features
- **✨ Intuitive UI:** Clean design using Tailwind CSS with smooth transitions and hover effects.
- **⌨️ Keyboard Support:** Full support for physical keyboard input (Numbers, Operators, Enter, Escape, Backspace).
- **🔊 Interactive Feedback:** Real-time audio feedback on clicks and visual error handling for invalid expressions.
- **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop screens.
- **🛠️ Robust Logic:** Handles complex expressions and multi-character operators gracefully.

---

## 🛠️ Tech Stack & Why?

| Technology | Reason for Choice |
| :--- | :--- |
| **SvelteKit** | Chosen for its superior developer experience, fast runtime performance (no virtual DOM), and built-in routing/optimization. |
| **TypeScript** | Ensures type safety, reduces runtime errors, and improves code maintainability and scalability. |
| **Tailwind CSS** | Allows for rapid UI development with a utility-first approach, ensuring a highly customizable and responsive design. |
| **Vite** | Used as the build tool for its lightning-fast HMR (Hot Module Replacement) and optimized production builds. |

---

## 🏗️ Architecture & Folder Structure

The project follows the standard **SvelteKit** directory structure, promoting a clean separation of concerns:

```text
calculator/
├── src/
│   ├── lib/              # Reusable components and icons
│   │   └── icon/         # SVG icons as Svelte components
│   ├── routes/           # Application pages and routing logic
│   │   ├── +layout.svelte # Shared layout
│   │   └── +page.svelte   # Main calculator logic and UI
│   ├── app.css           # Global Tailwind styles
│   └── app.html          # HTML Entry point
├── static/               # Static assets (audio files, favicons)
├── tailwind.config.js    # Tailwind CSS configuration
├── svelte.config.js      # SvelteKit configuration
└── tsconfig.json         # TypeScript configuration
```

---

## ⚙️ Installation & Setup

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/calculator.git
   cd calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

---

## 📖 Usage Instructions

- **Mouse/Touch:** Click or tap the buttons to enter numbers and operators.
- **Keyboard:**
    - `0-9`: Numbers
    - `+`, `-`, `*`, `/`: Operators
    - `Enter` or `=`: Calculate Result
    - `Backspace`: Delete last character
    - `Escape` or `AC`: Clear all
- **Error Handling:** If an invalid expression is entered (e.g., `5++5`), the display will flash red, indicating a syntax error.

---

## 🔮 Future Improvements
- [ ] Add a "History" feature to track previous calculations.
- [ ] Implement Scientific mode (Sin, Cos, Tan, etc.).
- [ ] Add Dark Mode support.
- [ ] Unit testing using Vitest for the core calculation logic.

---

## 👤 Author

**[Your Name]**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Profile](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
