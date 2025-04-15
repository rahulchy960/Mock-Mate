## 👋 Introduction to MockMate

🔗 Live: https://mock-mate-plum.vercel.app

**MockMate** is an AI-powered mock interview platform that helps you practice and prepare for job interviews in a realistic and interactive way. Whether you're applying for your first job or aiming for a career switch, MockMate allows you to simulate interview scenarios tailored to your desired role.

Here’s what makes MockMate awesome:

- 🧠 **AI-Generated Questions:** Just enter your job position and description — MockMate uses the Gemini API to generate intelligent, relevant interview questions instantly.
- 🎤 **Voice-Enabled Answers:** Speak your answers out loud using your microphone. MockMate listens, transcribes, and records them for feedback.
- 📹 **Webcam Practice:** Practice like a real interview with optional webcam mode so you can rehearse eye contact and body language.
- 📊 **Smart Feedback System:** Get personalized feedback and a performance rating for each question — instantly powered by AI.
- 🌗 **Dark Mode & Clean UI:** Designed with usability in mind — smooth transitions, light/dark themes, and responsive layout for all devices.

Whether you're practicing soft skills, preparing for a tech role, or just trying to overcome interview anxiety, **MockMate** makes the process easy, helpful, and even a little fun.

---

## 🚀 Features

- 🎯 **AI-Generated Questions** powered by Gemini API
- 🎤 **Voice Input & Webcam** integration using `react-webcam` and `react-hook-speech-to-text`
- 📝 **Real-Time Feedback** on answers with smart rating and suggestions
- 🌗 **Light / Dark Mode** with theme support (`next-themes` + `shadcn/ui`)
- 📦 **Persistent Data** using Drizzle ORM + Neon + PostgreSQL
- 🔐 **Authentication** via Clerk
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
| [Clerk](https://clerk.com/) | Authentication and User Management |
| [uuid](https://www.npmjs.com/package/uuid) | Unique ID generation |
| [react-webcam](https://www.npmjs.com/package/react-webcam) | Webcam integration |
| [react-hook-speech-to-text](https://www.npmjs.com/package/react-hook-speech-to-text) | Voice input |
| [next-themes](https://www.npmjs.com/package/next-themes) | Theme toggling |

---

## 📸 Screenshots

<p align="center">
  <img src="/Images/1.png" alt="DashBoard" />
  <img src="/Images/2.png" alt="Add New Interview" />
  <img src="/Images/3.png" alt="Information" />
  <img src="/Images/4.png" alt="Question and Answer Recording" />
  <img src="/Images/5.png" alt="Feedback" />
</p>


---

## 📦 Getting Started

```bash
git clone https://github.com/rahulchy960/Mock-Mate.git
cd ai-interview
npm install
npm run dev
