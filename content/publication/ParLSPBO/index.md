---
title: 'ParLS-PBO: A Parallel Local Search Solver for Pseudo Boolean Optimization'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Zhihan Chen
  - admin
  - Hao Hu
  - Shaowei Cai

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024-09-01T00:00:00Z'
doi: '10.4230/LIPIcs.CP.2024.5'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-08-02T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *30th International Conference on Principles and Practice of Constraint Programming*
publication_short: In *CP 2024*

abstract: As a broadly applied technique in numerous optimization problems, recently, local search has been employed to solve Pseudo-Boolean Optimization (PBO) problem. A representative local search solver for PBO is LS-PBO. In this paper, firstly, we improve LS-PBO by a dynamic scoring mechanism, which dynamically strikes a balance between score on hard constraints and score on the objective function. Moreover, on top of this improved LS-PBO, we develop the first parallel local search PBO solver. The main idea is to share good solutions among different threads to guide the search, by maintaining a pool of feasible solutions. For evaluating solutions when updating the pool, we propose a function that considers both the solution quality and the diversity of the pool. Furthermore, we calculate the polarity density in the pool to enhance the scoring function of local search. Our empirical experiments show clear benefits of the proposed parallel approach, making it competitive with the parallel version of the famous commercial solver Gurobi.

# Summary. An optional shortened abstract.
summary: Parallel local search solver for PBO 0-1 integer programming 

tags:
  - PBO
  - 0-1 Integer Programming
  - Local Search

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2407.21729'
url_code: 'https://github.com/shaowei-cai-group/ParLS-PBO'
url_dataset: 'https://github.com/shaowei-cai-group/ParLS-PBO/tree/main/other'
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
