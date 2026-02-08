/* DARK MODE */
const toggleTheme = () => {
 document.body.classList.toggle("dark");
 localStorage.theme =
 document.body.classList.contains("dark") ? "dark":"light";
};

if(localStorage.theme==="dark")
 document.body.classList.add("dark");

/* NAV COMPONENT */
function navbar(){
return `
<div class="nav">
 <div><b>MyBlog</b></div>
 <div>
   <a href="index.html">Home</a>
   <a href="blog.html">Blog</a>
   <a href="about.html">About</a>
   <a href="contact.html">Contact</a>
   <a href="#" onclick="toggleTheme()">🌓</a>
 </div>
</div>`;
}

/* FOOTER */
function footer(){
return `<div class="footer">
© 2026 Personal Blog • Minimal & Professional
</div>`;
}

/* BLOG CARDS */
function renderCards(list){
return list.map(p=>`
<div class="card">
 <h3>${p.title}</h3>
 <p>${p.date}</p>
 <div>${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
 <br>
 <a class="btn" href="post.html?id=${p.id}">Read</a>
</div>
`).join("");
}

/* SEARCH + FILTER */
function filterPosts(q){
q=q.toLowerCase();
return POSTS.filter(p =>
 p.title.toLowerCase().includes(q) ||
 p.tags.join().includes(q));
}

/* MARKDOWN (very small parser) */
function md(text){
return text
.replace(/^## (.*$)/gim,'<h2>$1</h2>')
.replace(/^### (.*$)/gim,'<h3>$1</h3>')
.replace(/\*\*(.*)\*\*/gim,'<b>$1</b>')
.replace(/```([\s\S]*?)```/gim,'<pre>$1</pre>')
.replace(/\n/g,'<br>');
}

function footer(){
return `<div class="footer">
© 2026 Rejina KC — Personal Blog & Portfolio
</div>`;
}
