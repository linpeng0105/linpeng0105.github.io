---
title: 'ParaILP: A Parallel Local Search Framework for Integer Linear Programming with Cooperative Evolution Mechanism'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Mengchuan Zou
  - Zhihan Chen
  - Shaowei Cai

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024-08-04T00:00:00Z'
doi: '10.24963/ijcai.2024/768'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-08-03T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *the 33rd International Joint Conference on Artificial Intelligence*
publication_short: In *IJCAI 2024*

abstract: The integer linear programming (ILP) problem is a fundamental research topic in operations research, and the local search method is an important class of algorithms for quickly solving many combinatorial optimization problems. With rapidly increasing computing power, parallelism turns out to be a promising approach to enhancing the efficiency of problem-solving. However, rare studies investigate parallel local search algorithms for solving the general ILP problem. We propose the first parallel local search framework (ParaILP) for solving the general ILP problem, based on two novel ideas{:} a new initialization method named polarity initialization to construct different initial solutions for local search threads and a cooperative evolution mechanism for managing and generating high-quality solutions using information shared by different threads. Extensive experiments demonstrate that ParaILP is significantly better than the state-of-the-art academic parallel solvers FiberSCIP and HiGHS, and is competitive with the state-of-the-art commercial parallel solver Gurobi. Experiments are also conducted to analyze the parallelization scalability and the effectiveness of our techniques.

# Summary. An optional shortened abstract.
summary: The first parallel local search framework and an efficient parallel solver for solving general ILP.

tags:
  - Integer Programming
  - Parallel Programming
  - Local Search

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://www.ijcai.org/proceedings/2024/0768.pdf'
url_code: 'https://github.com/shaowei-cai-group/ParaILP'
url_dataset: 'https://github.com/shaowei-cai-group/ParaILP/blob/main/benchmark/benchmark.txt'
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

{{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
