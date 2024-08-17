---
title: 'An Efficient Local Search Solver for Mixed Integer Programming'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Mengchuan Zou
  - Shaowei Cai

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024-09-02T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-08-02T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *30th International Conference on Principles and Practice of Constraint Programming*
publication_short: In *CP 2024*

abstract: Mixed integer programming (MIP) is a fundamental model in operations research. Local search is a powerful method for solving hard problems, but the development of local search solvers for MIP still needs to be explored. This work develops an efficient local search solver for solving MIP, called Local-MIP. We propose two new operators for MIP to adaptively modify variables for optimizing the objective function and satisfying constraints, respectively. Furthermore, we design a new weighting scheme to dynamically balance the priority between the objective function and each constraint, and propose a two-level scoring function structure to hierarchically guide the search for high-quality feasible solutions. Experiments are conducted on seven public benchmarks to compare Local-MIP with state-of-the-art MIP solvers, which demonstrate that Local-MIP significantly outperforms CPLEX, HiGHS, SCIP and Feasibility Jump, and is competitive with the most powerful commercial solver Gurobi. Moreover, Local-MIP establishes 4 new records for MIPLIB open instances.

# Summary. An optional shortened abstract.
summary: The Best Paper in CP 2024

tags:
  - Mixed Integer Programming
  - Local Search

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'cp2024.pdf'
url_code: 'https://github.com/shaowei-cai-group/Local-MIP'
url_dataset: 'https://github.com/shaowei-cai-group/Local-MIP/tree/main/benchmark'
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
