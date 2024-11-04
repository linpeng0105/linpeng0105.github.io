---
title: IJCAI 2024 Presentation

event: the 33rd International Joint Conference on Artificial Intelligence
event_url: https://ijcai24.org

location: International Convention Center Jeju (ICC Jeju)
address:
  street: 
  city: 
  region: Jeju Island
  postcode: ''
  country: South Korea

summary: The first parallel local search framework and an efficient parallel solver for solving general ILP.
abstract: The integer linear programming (ILP) problem is a fundamental research topic in operations research, and the local search method is an important class of algorithms for quickly solving many combinatorial optimization problems. With rapidly increasing computing power, parallelism turns out to be a promising approach to enhancing the efficiency of problem-solving. However, rare studies investigate parallel local search algorithms for solving the general ILP problem. We propose the first parallel local search framework (ParaILP) for solving the general ILP problem, based on two novel ideas{:} a new initialization method named polarity initialization to construct different initial solutions for local search threads and a cooperative evolution mechanism for managing and generating high-quality solutions using information shared by different threads. Extensive experiments demonstrate that ParaILP is significantly better than the state-of-the-art academic parallel solvers FiberSCIP and HiGHS, and is competitive with the state-of-the-art commercial parallel solver Gurobi. Experiments are also conducted to analyze the parallelization scalability and the effectiveness of our techniques.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2023-08-08T10:00:00Z'
date_end: '2023-08-08T11:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2017-01-01T00:00:00Z'

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
url_code: 'https://github.com/shaowei-cai-group/ParaILP'
url_pdf: 'https://www.ijcai.org/proceedings/2024/0768.pdf'
url_slides: 'ijcai-slides.pdf'
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
