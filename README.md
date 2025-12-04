# **[ 🏠 Home ](/)** | **[ 👤 About Me ](/about)**
# My Bug Bounty Writeups 

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span style="color: #666; font-size: 14px;"> - {{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
