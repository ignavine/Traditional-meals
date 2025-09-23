const header = document.querySelector("header");
const headerContent = `
<nav>
            <div class="logo">
                <img src="/images/logo.svg" class="logo">
            </div>
            <div class="nav-div1">
                <a href="/Home-page/index.html" class="a"><span>Home</span></a>
                <a href="/recipe/recipe.html" class="a"><span>Recipe</span></a>
                <a href="/About-Page/about.html" class="a"><span>About
                        us</span></a>
                <a href="/contact-Form/contact.html" class="a">Contact us</a>
            </div>
            <div class="dropdown">
                <div class="dropdown-1">
                    <button class="btn-1">Tribes</button>
                    <div class="content-1">
                        <ul class="ul" style="margin: 0;">
                            <li><a href="/Home-page/index.html#achu-section">Mankon</a></li>
                            <li><a href="/Home-page/index.html#fufu-section">Bafut</a></li>
                            <li><a href="/Home-page/index.html#koki-section">Bafang</a></li>
                            <li><a href="/Home-page/index.html#beans-section">Batibo</a></li>
                            <li><a href="/Home-page/index.html#fufu-section">Kom</a></li>
                            <li><a href="/Home-page/index.html#eru-section">Bakossi</a></li>
                            <li><a href="/Home-page/index.html#ndole-section">Ewondo</a></li>
                            <li><a href="/Home-page/index.html#coco-section">Mafe</a></li>
                            <li><a href="/Home-page/index.html#coco-section">Meta</a></li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown-2">
                    <button class="btn-2">Meals</button>
                    <div class="content-2">
                        <ul class="ul" style="margin: 0;">
                            <li><a href="/recipe/recipe.html#achu">Achu</a></li>
                            <li><a href="/recipe/recipe.html#fufu">Fufu</a></li>
                            <li><a href="/recipe/recipe.html#eru">Eru</a></li>
                            <li><a
                                    href="/recipe/recipe.html#beans">Beans</a></li>
                            <li><a
                                    href="/recipe/recipe.html#ekwang">Ekwang</a></li>
                            <li><a
                                    href="/recipe/recipe.html#ndole">Ndole</a></li>
                            <li><a
                                    href="/recipe/recipe.html#sanga">Sanga</a></li>
                            <li><a href="/recipe/recipe.html#koki">Koki</a></li>
                            <li><a href="/recipe/recipe.html#coco">Turning
                                    coco</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
`;
header.innerHTML = headerContent;
