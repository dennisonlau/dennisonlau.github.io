# Dennison Lau

My personal website: [dennisonlau.github.io](https://dennisonlau.github.io/).

I’m a digital systems engineer based in Cambridge, UK. This site is where I write about books, technology, investing, and how people think.

I write to understand what I’ve read, question my assumptions, and express my thoughts more clearly.

## Explore

- [Bookshelf](https://dennisonlau.github.io/bookshelf/) — book notes, personal ratings, and ideas that stayed with me.
- [Essays](https://dennisonlau.github.io/essays/) — questions and reflections beyond the bookshelf.
- [Tags](https://dennisonlau.github.io/tags/) — browse writing by topic.
- [About](https://dennisonlau.github.io/about/) — my background and why I write.

## Built with

- [Astro](https://astro.build/) and the [AstroPaper](https://github.com/satnaing/astro-paper) theme
- Tailwind CSS
- Markdown and MDX for content
- Pagefind for search
- GitHub Actions and GitHub Pages for building and hosting

Book covers can be retrieved by ISBN through Open Library, or supplied as local images.

## Add a book note

Create a Markdown file inside `src/content/posts/`, for example `my-book-note.md`:

```markdown
---
title: "Book title — what stayed with me"
description: "A short statement of my main takeaway."
pubDatetime: 2026-09-19T12:00:00Z
draft: true
tags:
  - book-notes
  - technology
book:
  title: "Book title"
  author: "Author name"
  readDate: 2026-09-19
  status: finished
  rating: 8
---

## The idea that stayed with me

Write here.

## What I agree with—and what I question

Write here.

## What this changes for me

Write here.

## Questions I’m still thinking about

Write here.
```

The `book` block places the post on the Bookshelf. The top-level `title` names the article; `book.title` names the book.

Book metadata:

| Field | Usage |
| --- | --- |
| `title` | Required book title |
| `author` | Required book author |
| `isbn` | Optional quoted ISBN-10 or ISBN-13 for cover lookup |
| `readDate` | Optional reading date; the Bookshelf falls back to the publication date |
| `status` | `finished`, `reading`, or `abandoned`; defaults to `finished` |
| `rating` | Optional personal score from 0 to 10 |
| `stoppedAtPage` | Optional page number for an abandoned book |
| `cover` | Optional local cover path beginning with `/images/books/` |

To look up a cover, add the book’s actual ISBN inside the `book` block:

```yaml
  isbn: "9780140328721"
```

Cover availability depends on Open Library’s catalogue.

For a local cover, save the image at `public/images/books/my-book.jpg` and add:

```yaml
  cover: "/images/books/my-book.jpg"
```

A local cover takes priority over the ISBN lookup.

## Add an essay

Create another Markdown file inside `src/content/posts/`. Omit the `book` block to have it appear under Essays.

```markdown
---
title: "A question I’m thinking about"
description: "A short introduction to the question."
pubDatetime: 2026-09-19T12:00:00Z
draft: true
tags:
  - technology
---

Start writing here.
```

Tags come from each post’s frontmatter. Reuse consistent tag names to keep related writing together.

## Publish

1. Finish the Markdown file and update its publication date.
2. Change `draft: true` to `draft: false`.
3. Preview locally and run `pnpm build`.
4. Commit the content and any accompanying images.
5. Push to `main`.

For example:

```bash
git add src/content/posts/my-book-note.md
git commit -m "Add new book note"
git push origin main
```

If you added a local cover, stage that image too.

Every push to `main` triggers the **Publish website** GitHub Actions workflow. Once the build and deployment succeed, GitHub Pages serves the updated site.

Future-dated posts may require another build after their publication time; the site does not rebuild simply because time has passed.

## Files to know

| Path | Purpose |
| --- | --- |
| `src/content/posts/` | Book notes and essays |
| `src/content/pages/about.md` | About page content |
| `src/content.config.ts` | Content fields and validation |
| `src/pages/index.astro` | Homepage |
| `src/pages/bookshelf.astro` | Bookshelf and sorting |
| `src/pages/essays.astro` | Essays listing |
| `src/components/Header.astro` | Site identity and navigation |
| `src/components/Card.astro` | Shared writing cards |
| `src/layouts/Layout.astro` | Shared document layout and favicon links |
| `src/styles/global.css` | Global styling |
| `public/images/` | Portrait and other static images |
| `.github/workflows/deploy.yml` | Build and deployment workflow |

## Credits

Based on [AstroPaper](https://github.com/satnaing/astro-paper), customised for my personal writing and reading notes.

Book cover lookup is provided by [Open Library](https://openlibrary.org/).
