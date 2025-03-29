<template>
  <div id="app">
    <nav class="sidebar close" style="opacity: 1">
      <header>
        <div class="image-text">
          <span class="image">
            <b-avatar
              :src=" this.$store.state.user[0].avatar_url "
            ></b-avatar>
          </span>

          <div class="text logo-text">
            <span class="name"> {{ this.$store.state.user[0].username }} </span>
            <span class="profession"><i class="bx bx-station"></i> Active</span>
          </div>
        </div>

        <i class="bx bx-chevron-right toggle"></i>
      </header>

      <div class="menu-bar">
        <div class="menu">
          <li class="search-box">
            <i class="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul class="menu-links">
            <li class="">
              <router-link to="/">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Home</span>
              </router-link>
            </li>

            <li class="">
              <router-link to="/user">
                <i class="bx bx-user icon"></i>
                <span class="text nav-text">User</span>
              </router-link>
            </li>

            <li class="">
              <router-link to="/support">
                <i class="bx bx-chat icon"></i>
                <span class="text nav-text">Talk to us</span>
              </router-link>
            </li>
            <!-- Analytics will be implemented after alpha version
                    <li class="">
                        <router-link to="/analytics">
                            <i class='bx bx-pie-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Analytics</span>
                        </router-link>
                    </li>
                    -->

            <li class="">
              <router-link to="/order">
                <i class="bx bx-cart-alt icon"></i>
                <span class="text nav-text">Orders</span>
              </router-link>
            </li>

            <li class="">
              <router-link to="/saved">
                <i class="bx bx-heart icon"></i>
                <span class="text nav-text">Saved</span>
              </router-link>
            </li>

            <li class="">
              <router-link to="/config">
                <i class="bx bx-cog icon"></i>
                <span class="text nav-text">Config</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="bottom-content">
          <li class="">
            <router-link to="/login">
              <i class="bx bx-log-in icon"></i>
              <span class="text nav-text">Login</span>
            </router-link>
          </li>

          <li class="mode">
            <div class="sun-moon">
              <i class="bx bx-moon icon moon"></i>
              <i class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text">Dark mode</span>

            <div class="toggle-switch">
              <span class="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>

    <section class="home">
      <div class="logo">
        <img alt="Vue logo" src="./assets/logo.png" height="70vh" />
      </div>
      <router-view class="router"></router-view>
    </section>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  mounted () {
    const body = document.querySelector('body')
    const sidebar = body.querySelector('nav')
    const toggle = body.querySelector('.toggle')
    const searchBtn = body.querySelector('.search-box')
    const modeSwitch = body.querySelector('.toggle-switch')
    const modeText = body.querySelector('.mode-text')

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close')
    })

    searchBtn.addEventListener('click', () => {
      sidebar.classList.remove('close')
    })

    modeSwitch.addEventListener('click', () => {
      body.classList.toggle('dark')

      if (body.classList.contains('dark')) {
        modeText.innerText = 'Light mode'
      } else {
        modeText.innerText = 'Dark mode'
      }
    })
  },
  data () {
    return {

    }
  }

}
</script>
<style>
/* Google Font Import - Poppins */
/* Google Font Import - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
.logo {
  padding-left: 30px;
  padding-top: 20px;
}
.close:hover {
  color: #000;
  text-decoration: none;
}
.router {
  padding-left: 25px;
}
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: none;
}

ol,
ul {
  padding-left: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  /* ===== Colors ===== */
  --body-color: #e4e9f7;
  --sidebar-color: #fff;
  --primary-color: #f37a17;
  --primary-color-light: #f6f5ff;
  --toggle-color: #ddd;
  --text-color: #707070;

  /* ====== Transition ====== */
  --tran-03: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.3s ease;
  --tran-05: all 0.3s ease;
}

body {
  min-height: 100vh;
  background-color: var(--body-color);
  transition: var(--tran-05);
}

::selection {
  background-color: var(--primary-color);
  color: #fff;
}

body.dark {
  --body-color: #18191a;
  --sidebar-color: #242526;
  --primary-color: #3a3b3c;
  --primary-color-light: #3a3b3c;
  --toggle-color: #fff;
  --text-color: #ccc;
}

/* ===== Sidebar ===== */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 100;
}
.sidebar.close {
  width: 88px;
  opacity: 100%;
  background: var(--sidebar-color);
}
.sidebar:focus {
  opacity: 100%;
}
/* ===== Reusable code - Here ===== */
.sidebar li {
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon {
  min-width: 60px;
  border-radius: 6px;
}

.sidebar .icon {
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.sidebar .text,
.sidebar .icon {
  color: var(--text-color);
  transition: var(--tran-03);
}

.sidebar .text {
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
}
.sidebar.close .text {
  opacity: 0;
}
/* =========================== */

.sidebar header {
  position: relative;
}

.sidebar header .image-text {
  display: flex;
  align-items: center;
}
.sidebar header .logo-text {
  display: flex;
  flex-direction: column;
}
header .image-text .name {
  margin-top: 2px;
  font-size: 18px;
  font-weight: 600;
}

header .image-text .profession {
  font-size: 16px;
  margin-top: -2px;
  display: block;
}

.sidebar header .image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar header .image img {
  width: 40px;
  border-radius: 6px;
}

.sidebar header .toggle {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%) rotate(180deg);
  height: 25px;
  width: 25px;
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: var(--tran-05);
}

body.dark .sidebar header .toggle {
  color: var(--text-color);
}

.sidebar.close .toggle {
  transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu {
  margin-top: 40px;
}

.sidebar li.search-box {
  border-radius: 6px;
  background-color: var(--primary-color-light);
  cursor: pointer;
  transition: var(--tran-05);
}

.sidebar li.search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: var(--primary-color-light);
  color: var(--text-color);
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  transition: var(--tran-05);
}
.sidebar li a {
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--tran-03);
}

.sidebar li a:hover {
  background-color: var(--primary-color);
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--sidebar-color);
}
body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text {
  color: var(--text-color);
}

.sidebar .menu-bar {
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}
.menu-bar::-webkit-scrollbar {
  display: none;
}
.sidebar .menu-bar .mode {
  border-radius: 6px;
  background-color: var(--primary-color-light);
  position: relative;
  transition: var(--tran-05);
}

.menu-bar .mode .sun-moon {
  height: 50px;
  width: 60px;
}

.mode .sun-moon i {
  position: absolute;
}
.mode .sun-moon i.sun {
  opacity: 0;
}
body.dark .mode .sun-moon i.sun {
  opacity: 1;
}
body.dark .mode .sun-moon i.moon {
  opacity: 0;
}

.menu-bar .bottom-content .toggle-switch {
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}
.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 40px;
  border-radius: 25px;
  background-color: var(--toggle-color);
  transition: var(--tran-05);
}

.switch::before {
  content: "";
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: var(--sidebar-color);
  transition: var(--tran-04);
}

body.dark .switch::before {
  left: 20px;
}

.home {
  position: absolute;
  top: 0;
  top: 0;
  left: 250px;
  height: 100vh;
  width: calc(100% - 250px);
  background-color: var(--body-color);
  transition: var(--tran-05);
}
.home .text {
  font-size: 30px;
  font-weight: 500;
  color: var(--text-color);
  padding: 12px 60px;
}

.sidebar.close ~ .home {
  left: 72px;
  height: 100vh;
  width: calc(100% - 72px);
}
body.dark .home .text {
  color: var(--text-color);
}
</style>
