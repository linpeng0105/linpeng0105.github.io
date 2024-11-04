---
title: CP 2024 Presentation (Best Paper Award)

event: 30th International Conference on Principles and Practice of Constraint Programming
event_url: https://cp2024.a4cp.org/

location: Girona, Catalonia, Spain
address:
  street: 
  city: 
  region: Girona
  postcode: ''
  country: Spain

summary: The Presentation of Best Paper in CP 2024.
abstract: Mixed integer programming (MIP) is a fundamental model in operations research. Local search is a powerful method for solving hard problems, but the development of local search solvers for MIP still needs to be explored. This work develops an efficient local search solver for solving MIP, called Local-MIP. We propose two new operators for MIP to adaptively modify variables for optimizing the objective function and satisfying constraints, respectively. Furthermore, we design a new weighting scheme to dynamically balance the priority between the objective function and each constraint, and propose a two-level scoring function structure to hierarchically guide the search for high-quality feasible solutions. Experiments are conducted on seven public benchmarks to compare Local-MIP with state-of-the-art MIP solvers, which demonstrate that Local-MIP significantly outperforms CPLEX, HiGHS, SCIP and Feasibility Jump, and is competitive with the most powerful commercial solver Gurobi. Moreover, Local-MIP establishes 4 new records for MIPLIB open instances.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2024-09-04T00:00:00Z'
date_end: '2024-09-04T00:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2017-09-04T00:00:00Z'

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
url_code: 'https://github.com/shaowei-cai-group/Local-MIP'
url_pdf: 'https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CP.2024.19'
url_slides: 'https://cp2024.a4cp.org/slides/CP/AnEfficientLocal.pdf'
url_video: 'https://diobma.udg.edu/handle/10256.1/7765'

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
