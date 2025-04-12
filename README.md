# 🧠 MockMate — Your AI-Powered Mock Interview Assistant

MockMate is an AI-driven mock interview app designed to simulate real-world interview scenarios. It generates personalized interview questions, records your answers, and provides smart feedback — all in one sleek interface.

Built with cutting-edge tools like **Next.js**, **Gemini AI**, **Tailwind CSS**, and **PostgreSQL**, MockMate helps you prepare confidently for your next big opportunity.

---

## 🚀 Features

- 🎯 **AI-Generated Questions** powered by Gemini API
- 🎤 **Voice Input & Webcam** integration using `react-webcam` and `react-hook-speech-to-text`
- 📝 **Real-Time Feedback** on answers with smart rating and suggestions
- 🌗 **Light / Dark Mode** with theme support (`next-themes` + `shadcn/ui`)
- 📦 **Persistent Data** using Drizzle ORM + Neon + PostgreSQL
- 🔐 **Authentication** via Clerk (not listed above, but you mentioned earlier!)
- 🎨 Custom themes using Tailwind CSS and CSS variables

---

## 🛠️ Tech Stack

| Tech | Role |
|------|------|
| [Next.js](https://nextjs.org/) | React framework for SSR/SSG |
| [React](https://reactjs.org/) | UI Library |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | Beautiful, accessible components |
| [Gemini API](https://ai.google.dev/) | AI-generated questions & feedback |
| [Drizzle ORM](https://orm.drizzle.team/) | Type-safe database queries |
| [Neon](https://neon.tech/) | Serverless Postgres |
| [PostgreSQL](https://www.postgresql.org/) | Relational database |
| [uuid](https://www.npmjs.com/package/uuid) | Unique ID generation |
| [react-webcam](https://www.npmjs.com/package/react-webcam) | Webcam integration |
| [react-hook-speech-to-text](https://www.npmjs.com/package/react-hook-speech-to-text) | Voice input |
| [next-themes](https://www.npmjs.com/package/next-themes) | Theme toggling |

---

## 📸 Screenshots

<p align="center">
  <img src="/Images/1.png" alt="Home Screen" width="600" height="350" />
  <img src="/Images/2.png" alt="Job Description Entry" width="600" height="350" />
  <img src="/Images/3.png" alt="Question View" width="600" height="350" />
  <img src="/Images/4.png" alt="Answer Recording" width="600" height="350" />
  <img src="/Images/5.png" alt="Voice Input" width="600" height="350" />
</p>


---

## 📦 Getting Started

```bash
git clone https://github.com/your-username/mockmate.git
cd mockmate
npm install
npm run dev
