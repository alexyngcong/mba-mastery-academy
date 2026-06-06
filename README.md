# 🎓 MBA Mastery Academy

An executive-grade, **self-paced Master of Business Management** program built for
**managers and senior leaders in 2026 and beyond**. It covers the **full department
structure of an accredited MBA** — across 17 disciplines — in short, case-based
lessons with rigorous quizzes, department exams, and a cumulative comprehensive final.

It runs **100% locally** in any web browser, works **offline**, and
**remembers your progress automatically**. No installation, no internet, no account,
no server.

`index.html` is a **single self-contained file** — every lesson, style and line of
logic is bundled inside it. Copy that one file anywhere (USB stick, email, phone) and
it just works.

---

## ▶️ How to start

1. Copy **`index.html`** onto any computer (that one file is all you need).
2. **Double-click `index.html`.** It opens in your browser (Chrome, Edge, Safari…).
3. Start with **Strategic Management**, or open the **🗓️ 17-Week Study Plan**.

> 💡 Tip: bookmark the page (`Ctrl + D`) so it's one click away.

---

## 🎓 The path to the degree certificate

Pick a **department** → study the **lessons** (Core → Applied → Executive) → pass each
**quiz (70%)** → sit the **department Final Exam (80%)**. After all 17 departments,
pass the **Comprehensive Final Exam** (drawn from every department, 80%) to unlock your
**Certificate of Completion**.

| # | Department | Focus |
|---|-----------|-------|
| 1 | 🧠 **Strategic Management** | Competitive advantage, Five Forces/PESTEL, corporate & growth strategy, OKRs & Balanced Scorecard, disruption & Blue Ocean |
| 2 | 🌟 **Leadership & Org Behavior** | Leadership styles, motivation, high-performing teams, culture & change, EQ & executive presence |
| 3 | 📣 **Marketing Management** | STP, marketing mix & brand, digital/growth/performance marketing, pricing & customer lifetime value |
| 4 | 📒 **Accounting for Leaders** | The three statements, profitability, balance sheet & cash flow, cost/managerial accounting, ratio analysis |
| 5 | 💰 **Corporate Finance & Valuation** | Time value of money, NPV/IRR, WACC & CAPM, capital structure, DCF & multiples valuation |
| 6 | 📈 **Managerial Economics** | Demand & elasticity, market structure & pricing power, game theory, macro for decision-makers |
| 7 | 🌍 **International Business & Global Strategy** | Trade & globalization, market-entry modes & CAGE, cross-cultural management, FX & global risk |
| 8 | ⚙️ **Operations & Supply Chain** | Processes & bottlenecks, Lean/Six Sigma, inventory & supply chains, project management & agile |
| 9 | 💻 **Information Systems & Tech Management** | MIS & enterprise systems, IT strategy & architecture, cybersecurity, data governance & IT value |
| 10 | 🔢 **Data, Analytics & Decisions** | Data-driven decisions, statistics, A/B testing, KPIs & dashboards that matter |
| 11 | 👥 **People, Talent & Culture** | Structured hiring, performance & feedback, rewards & retention, talent development & succession |
| 12 | 🚀 **Entrepreneurship & Innovation** | Lean startup & MVP, business models & unit economics, fundraising, corporate innovation |
| 13 | 🤖 **AI & Digital Leadership (2026+)** | AI literacy, AI strategy & ROI, AI governance/risk/ethics, leading AI-augmented teams, digital transformation |
| 14 | 📜 **Business Law & Compliance** | Contracts, business structures & corporate law, IP & tech law, employment law, compliance & data privacy |
| 15 | ⚖️ **Ethics, Governance, ESG & Risk** | Ethical frameworks, the board, ESG & sustainability, enterprise risk & resilience |
| 16 | 🤝 **Negotiation, Communication & Influence** | Principled negotiation & BATNA, executive storytelling, persuasion & stakeholders, difficult conversations |
| 17 | 🎯 **Capstone: Integrative Management** | Thinking like a GM, the business & strategic plan, board-ready case analysis, leading the whole enterprise |

**17 departments · 74 lessons · 294 quiz questions · 17 department exams · 1 comprehensive final.**
Quiz and exam answer choices are **shuffled every attempt**, so passing means actually
knowing the material.

**Also included:**
- 🗓️ **17-Week Study Plan** — one department per week, a guided path through the whole program.
- 🎓 **Comprehensive Final Exam** — a degree-level, 25-question cumulative exam drawn from every department; 80% to pass and the final requirement for your certificate.
- 🧰 **Executive Toolkit** — a searchable reference of 45 frameworks, formulas and concepts (SWOT, NPV, WACC, BATNA, OKRs, DuPont, CAGE, CIA Triad…).
- ✍️ **Executive Challenges** — every lesson ends with a realistic decision or exercise to apply the idea.
- 🏆 **Certificate of Completion** — unlocks when every lesson is done, every department exam is passed, and the comprehensive final is cleared; print it or save as PDF.

---

## ✨ Features

- **Progress tracking** — completed lessons get a green tick; progress bars fill up. Saved automatically in the browser.
- **Rigorous quizzes** — every lesson ends with a quiz. Score 70%+ to complete it. Answer choices are shuffled on every attempt.
- **Department & comprehensive exams** — department exams (80%) pull from the whole department; the comprehensive final pulls from all 17 departments.
- **Key Takeaways** boxes in every lesson — the senior-level point to remember.
- **Search** — type any term ("strategy", "cash flow", "NPV", "GDPR", "AI") to jump straight to a lesson or framework.
- **Works on phone, tablet or computer**, online or offline.

---

## 🛠️ For whoever maintains this

- Plain HTML/CSS/JavaScript — **no frameworks, no dependencies**.
- `index.html` is the **built, self-contained** file learners open. It's generated by
  inlining the source files in `/assets`.
- To **add or edit lessons**, open `assets/curriculum.js`. Each lesson is a block with a
  title, level, content, tips, an executive challenge and a quiz. Copy an existing block
  and change the text.
- After editing anything in `/assets`, **rebuild the single file**:
  ```
  node build.js
  ```
  This regenerates `index.html`. (The build refuses to inline anything containing a
  literal closing `script` tag, which would break the single-file HTML.)

---

*Educational content. The frameworks and figures are teaching simplifications — not
financial, legal, tax or investment advice.*
