---
# Leave the homepage title empty to use the site title
title: "Peng Lin (林鹏)"
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "2rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: "🎖 Honors and Awards"
      subtitle: ""
      text: |-
        **Best Paper Award of CP 2024**  
        - My paper, titled *"An Efficient Local Search Solver for Mixed Integer Programming"*, which I authored as **the first author**, was awarded the Best Paper Award at CP 2024.
        
        **电力国产求解器技术专题赛**  
        - 2024年12月26日至30日，第二届能源电子产业创新大赛国产求解器技术专题赛在北京举行。该项赛事由工业和信息化部等单位主办、中国电力科学研究院有限公司协办。软件所团队获得二等奖，参赛队伍成员为博士生林鹏，博士后邹蒙川，队伍负责人为蔡少伟研究员。
    design:
      columns: 1

  - block: collection
    id: papers
    content:
      title: 📝 Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications / Preprints
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: 💬 Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1
  - block: markdown
    content:
      title: "🔥 New Records for MIPLIB Open Instances"
      subtitle: ""
      text: |-
        I am excited to share that I have established 11 new records for MIPLIB open instances:

        <div style="display: flex; flex-wrap: wrap;">
          <div style="flex: 50%; padding-right: 10px;">
            <ul>
              <li><a href="https://miplib.zib.de/instance_details_genus-sym-g31-8.html">genus-sym-g31-8</a></li>
              <li><a href="https://miplib.zib.de/instance_details_genus-sym-g62-2.html">genus-sym-g62-2</a></li>
              <li><a href="https://miplib.zib.de/instance_details_genus-g61-25.html">genus-g61-25</a></li>
              <li><a href="https://miplib.zib.de/instance_details_neos-4232544-orira.html">neos-4232544-orira</a></li>
              <li><a href="https://miplib.zib.de/instance_details_bley_xs1.html">bley_xs1</a></li>
              <li><a href="https://miplib.zib.de/instance_details_sorrell7.html">sorrell7</a></li>
            </ul>
          </div>
          <div style="flex: 50%; padding-left: 10px;">
            <ul>
              <li><a href="https://miplib.zib.de/instance_details_supportcase22.html">supportcase22</a></li>
              <li><a href="https://miplib.zib.de/instance_details_cdc7-4-3-2.html">cdc7-4-3-2</a></li>
              <li><a href="https://miplib.zib.de/instance_details_ns1828997.html">ns1828997</a></li>
              <li><a href="https://miplib.zib.de/instance_details_scpm1.html">scpm1</a></li>
              <li><a href="https://miplib.zib.de/instance_details_scpn2.html">scpn2</a></li>
            </ul>
          </div>
        </div>
    design:
      columns: '2'

---
