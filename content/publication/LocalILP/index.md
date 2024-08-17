---
title: "New Characterizations and Efficient Local Search for General Integer Linear Programming"
authors:
- admin
- Shaowei Cai
- Mengchuan Zou
- Jinkun Lin
date: "2023-04-29T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: "arXiv preprint arXiv:2305.00188"
publication_short: "arXiv preprint arXiv:2305.00188"

abstract: Integer linear programming (ILP) models a wide range of practical combi- natorial optimization problems and significantly impacts industry and man- agement sectors. This work proposes new characterizations of ILP with the concept of boundary solutions. Motivated by the new characterizations, we develop a new local search algorithm Local-ILP, which is efficient for solv- ing general ILP validated on a large heterogeneous problem dataset. We propose a new local search framework that switches between three modes, namely Search, Improve, and Restore modes. Two new operators are pro- posed, namely the tight move and the lift move operators, which are asso- ciated with appropriate scoring functions. Different modes apply different operators to realize different search strategies and the algorithm switches between three modes according to the current search state. Putting these together, we develop a local search ILP solver called Local-ILP. Experiments conducted on the MIPLIB dataset show the effectiveness of our algorithm in solving large-scale hard ILP problems. In the aspect of finding a good feasible solution quickly, Local-ILP is competitive and complementary to the state-of-the-art commercial solver Gurobi and significantly outperforms the state-of-the-art non-commercial solver SCIP. Moreover, our algorithm estab- lishes new records for 6 MIPLIB open instances. The theoretical analysis of our algorithm is also presented, which shows our algorithm could avoid visiting unnecessary regions.

# Summary. An optional shortened abstract.
summary: 

tags:
- Integer Programming

featured: false

# links:
# - name: Custom Link
#   url: http://example.org
url_pdf: https://arxiv.org/pdf/2305.00188
url_code: 'https://github.com/shaowei-cai-group/Local-ILP'
url_dataset: 'https://github.com/shaowei-cai-group/Local-ILP/tree/main/Statistics_and_Results'
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

This work is driven by the results in my [previous paper](/publication/conference-paper/) on LLMs.

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
