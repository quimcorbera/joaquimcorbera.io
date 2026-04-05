# quimcorbera.github.io

Personal portfolio — Data, Analytics & AI.

## Structure

```
quimcorbera.github.io/
├── index.html              ← HTML shell (don't edit unless adding new sections)
├── assets/
│   ├── css/styles.css      ← All styles (colours, layout, animations)
│   ├── js/main.js          ← Renders content + handles interactions
│   └── img/
│       └── foto_cv.png     ← Profile photo
├── cv/
│   └── Joaquim_Corbera_CV.pdf   ← CV file linked from the Download button
├── data/
│   └── content.js          ← ✏️  EDIT THIS to update portfolio content
└── README.md
```

## How to update content

**99% of the time you only need to edit `data/content.js`.**

The file is structured as a single JavaScript object `CONTENT` with clearly labelled sections:

| Section | What it controls |
|---|---|
| `meta` | Name, role, hero tag, hero description |
| `links` | CV path, LinkedIn, GitHub, email |
| `about` | About me paragraphs and stats badges |
| `softSkills` | Soft skill blocks and bullet points |
| `hardSkills` | Skill cards, icons and tags |
| `experience` | Work history entries |
| `projects` | Project cards, descriptions and stack tags |
| `education` | Degree, school and bullet points |
| `certifications` | Certification list with issuer and date |
| `contact` | Contact section heading and subtext |

### Examples

**Add a new certification:**
```js
{ name: "My New Cert", issuer: "Issuer Name", date: "JAN 2026" },
```

**Add a new project:**
```js
{
  num:      "06",
  featured: false,
  title:    "My New Project",
  desc:     "Short description of the project.",
  stack:    ["Tool1", "Tool2"],
},
```

**Update a job description:**  
Find the matching entry in `experience` and edit the `desc` field.

## How to update the CV

1. Replace `cv/Joaquim_Corbera_CV.pdf` with the new file (keep the same filename).
2. Commit and push — GitHub Pages will serve the new version automatically.

## Deploy to GitHub Pages

```bash
# First time
git init
git remote add origin https://github.com/quimcorbera/quimcorbera.github.io.git
git add .
git commit -m "Initial portfolio"
git push -u origin main

# Then activate Pages: Settings → Pages → Source: main branch → Save
# URL: https://quimcorbera.github.io
```

## Day-to-day updates

```bash
# Edit data/content.js (or swap the CV file)
git add .
git commit -m "Update experience / add project / etc."
git push
# Changes live in ~1 minute
```
