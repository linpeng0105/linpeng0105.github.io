---
title: CP 2024 Presentation (ParLS-PBO)

event: 30th International Conference on Principles and Practice of Constraint Programming
event_url: https://cp2024.a4cp.org/

location: Girona, Catalonia, Spain
address:
  street: 
  city: 
  region: Girona
  postcode: ''
  country: Spain

summary: The Presentation of ParLS-PBO in CP 2024.
abstract: As a broadly applied technique in numerous optimization problems, recently, local search has been employed to solve Pseudo-Boolean Optimization (PBO) problem. A representative local search solver for PBO is LS-PBO. In this paper, firstly, we improve LS-PBO by a dynamic scoring mechanism, which dynamically strikes a balance between score on hard constraints and score on the objective function. Moreover, on top of this improved LS-PBO, we develop the first parallel local search PBO solver. The main idea is to share good solutions among different threads to guide the search, by maintaining a pool of feasible solutions. For evaluating solutions when updating the pool, we propose a function that considers both the solution quality and the diversity of the pool. Furthermore, we calculate the polarity density in the pool to enhance the scoring function of local search. Our empirical experiments show clear benefits of the proposed parallel approach, making it competitive with the parallel version of the famous commercial solver Gurobi.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2024-09-03T00:00:00Z'
date_end: '2024-09-03T00:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2017-09-03T00:00:00Z'

authors:
  - admin

tags: []

# Is this a featured talk? (true/false)
featured: false

image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/bzdhc5b3Bxs)'
  focal_point: Right

#links:
#  - icon: twitter
#    icon_pack: fab
#    name: Follow
#    url: https://twitter.com/georgecushen
url_code: 'https://github.com/shaowei-cai-group/ParLS-PBO'
url_pdf: 'https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CP.2024.5'
url_slides: 'https://cp2024.a4cp.org/slides/CP/ParLS-PBO.pdf'
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
  - example
---

{{% callout note %}}
Click on the **Slides** button above to view the built-in slides feature.
{{% /callout %}}

Slides can be added in a few ways:

- **Create** slides using Hugo Blox Builder's [_Slides_](https://docs.hugoblox.com/reference/content-types/) feature and link using `slides` parameter in the front matter of the talk file
- **Upload** an existing slide deck to `static/` and link using `url_slides` parameter in the front matter of the talk file
- **Embed** your slides (e.g. Google Slides) or presentation video on this page using [shortcodes](https://docs.hugoblox.com/reference/markdown/).

Further event details, including [page elements](https://docs.hugoblox.com/reference/markdown/) such as image galleries, can be added to the body of this page.
