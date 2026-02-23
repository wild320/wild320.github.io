document.addEventListener("DOMContentLoaded", () => {
    // 1. Renderizar la lista de Blogs en blogs.html
    const featuredContainer = document.getElementById("featured-post");
    const gridContainer = document.getElementById("blog-list");

    if (gridContainer && typeof blogPosts !== 'undefined') {
        gridContainer.innerHTML = ''; 
        if (featuredContainer) featuredContainer.innerHTML = '';
        
        blogPosts.forEach(post => {
            if (post.isFeatured && featuredContainer) {
                featuredContainer.innerHTML = `
                    <div class="featured-blog__img-container">
                        <img src="${post.img}" alt="${post.title}" class="featured-blog__img">
                    </div>
                    <div class="featured-blog__content">
                        <span class="tag">${post.tag}</span>
                        <h2 class="featured-blog__title">${post.title}</h2>
                        <p class="featured-blog__desc">${post.preview}</p>
                        <a href="article.html?id=${post.id}" class="read-more">Leer Artículo Completo</a>
                    </div>
                `;
            } else {
                const articleHTML = `
                    <article class="blog-card reveal-on-scroll" data-tag="${post.category || 'all'}">
                        <div class="blog-card__img-container">
                            <img src="${post.img}" alt="${post.title}" class="blog-card__img">
                        </div>
                        <div class="blog-card__content">
                            <span class="blog-card__date">${post.date}</span>
                            <h3 class="blog-card__title">${post.title}</h3>
                            <p class="blog-card__desc">${post.preview}</p>
                            <a href="article.html?id=${post.id}" class="read-more">Leer Más</a>
                        </div>
                    </article>
                `;
                gridContainer.innerHTML += articleHTML;
            }
        });
    }

    // 2. Renderizar un artículo individual en article.html dinámicamente
    const articleDoc = document.getElementById("single-article-content");
    if (articleDoc && typeof blogPosts !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const postId = parseInt(params.get('id'));

        const post = blogPosts.find(p => p.id === postId);

        if (post) {
            document.title = `${post.title} | Wild Jaramillo`;

            // SEO dinámico: actualizar meta tags para compartir en redes sociales
            const updateMeta = (selector, attr, value) => {
                const el = document.querySelector(selector);
                if (el) el.setAttribute(attr, value);
            };
            updateMeta('meta[name="description"]', 'content', post.preview);
            updateMeta('meta[property="og:title"]', 'content', `${post.title} | Wild Jaramillo`);
            updateMeta('meta[property="og:description"]', 'content', post.preview);
            updateMeta('meta[property="og:image"]', 'content', post.img);
            updateMeta('meta[property="og:type"]', 'content', 'article');
            updateMeta('meta[name="twitter:title"]', 'content', `${post.title} | Wild Jaramillo`);
            updateMeta('meta[name="twitter:description"]', 'content', post.preview);
            updateMeta('meta[name="twitter:image"]', 'content', post.img);

            articleDoc.innerHTML = `
                <div class="blog-post-header">
                    ${post.isFeatured ? '<span class="tag" style="margin: 0 auto 2rem; display: block; width: max-content;">Destacado</span>' : ''}
                    <h1 class="blog-post-title">${post.title}</h1>
                    <div class="blog-post-meta">
                        <span>Por Wild Jaramillo</span>
                        <span>•</span>
                        <span>${post.date}</span>
                        <span>•</span>
                        <span>Lectura de ${post.readTime}</span>
                    </div>
                </div>

                <img src="${post.img}" alt="${post.title}" class="blog-post-img">

                <div class="blog-post-content">
                    ${post.content}
                    <a href="blogs.html" class="btn btn-back">← Volver al Blog</a>
                </div>
            `;
        } else {
            document.title = "Artículo no encontrado | Wild Jaramillo";
            articleDoc.innerHTML = `
                <div class="blog-post-header">
                    <h1 class="blog-post-title">Artículo no encontrado 🛸</h1>
                </div>
                <div class="blog-post-content" style="text-align: center;">
                    <p>Parece que este artículo no existe, es posible que haya sido movido de lugar.</p>
                    <a href="blogs.html" class="btn btn-back">← Volver al Blog</a>
                </div>
            `;
        }
    }
});
