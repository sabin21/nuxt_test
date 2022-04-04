<template>
  <div class="w-full">
    <nav class="side-menu-wrap">
        <ul class="side-menu">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Core</li>
            <ul class="menu-2nd">
                <li><nuxt-link to="/doc_system_core/colors">Colors</nuxt-link></li>
                <li><nuxt-link to="/doc_system_core/spacing">Spacing</nuxt-link></li>                
                <li><nuxt-link to="/">Spacing</nuxt-link></li>
                <li><nuxt-link to="/">Spacing</nuxt-link></li>
            </ul>
            <li>Components</li>
            <ul class="menu-2nd">
                <li><nuxt-link to="/doc_components/components_preview1">Preview-1</nuxt-link></li>
                <li><nuxt-link to="/">Buttons</nuxt-link></li>
                <li><nuxt-link to="/">Spacing</nuxt-link></li>
                <li><nuxt-link to="/">Spacing</nuxt-link></li>
                <li><nuxt-link to="/">Spacing</nuxt-link></li>
            </ul>    
        </ul>
    </nav>

    <div class="main">
      <main class="container mx-auto content-wrap">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

