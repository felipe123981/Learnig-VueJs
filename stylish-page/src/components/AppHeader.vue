<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/card">Card</router-link></li>
                <li><router-link to="/buttons">Buttons</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: "AppHeader"
}
</script>