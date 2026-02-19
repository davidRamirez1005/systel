<template>
  <nav class="navbar" :class="{ 'navbar-fixed': isFixed, 'navbar-static': !isFixed }">
    <div class="navbar-container">
      <div class="navbar-brand">
        <img src="@/assets/img/logo systel  jpeg.jpeg" alt="Logo" class="logo" />
      </div>

      <!-- Desktop Menu -->
      <div class="navbar-menu desktop-menu">
        <router-link to="/" class="nav-link">{{ t("navbar.home") }}</router-link>

        <!-- Products/Services Dropdown -->
        <el-dropdown @command="handleProductServiceCommand" trigger="hover">
          <span class="nav-link dropdown-trigger">
            {{ t("navbar.productsServices") }}
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item disabled class="dropdown-header">{{
                t("navbar.productsServices")
              }}</el-dropdown-item>
              <el-dropdown-item divided command="security">
                <el-icon><Lock /></el-icon>
                {{ t("navbar.products.security") }}
              </el-dropdown-item>
              <el-dropdown-item command="infrastructure">
                <el-icon><Monitor /></el-icon>
                {{ t("navbar.products.infrastructure") }}
              </el-dropdown-item>
              <el-dropdown-item command="networking">
                <el-icon><Connection /></el-icon>
                {{ t("navbar.products.networking") }}
              </el-dropdown-item>
              <el-dropdown-item command="accessControl">
                <el-icon><Key /></el-icon>
                {{ t("navbar.products.accessControl") }}
              </el-dropdown-item>
              <el-dropdown-item divided disabled class="dropdown-header"
                >Servicios</el-dropdown-item
              >
              <el-dropdown-item command="consultancy">
                <el-icon><DocumentChecked /></el-icon>
                {{ t("navbar.services.consultancy") }}
              </el-dropdown-item>
              <el-dropdown-item command="training">
                <el-icon><Reading /></el-icon>
                {{ t("navbar.services.training") }}
              </el-dropdown-item>
              <el-dropdown-item command="support">
                <el-icon><Tools /></el-icon>
                {{ t("navbar.services.support") }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <a href="#software" class="nav-link" @click.prevent="scrollToSoftware">{{
          t("navbar.software")
        }}</a>
        <a href="#educacion" class="nav-link" @click.prevent="scrollToEducation">{{
          t("navbar.education")
        }}</a>
        <a href="#contact" class="nav-link" @click.prevent="scrollToContact">{{
          t("navbar.contact")
        }}</a>

        <!-- <div class="flex items-center">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-icon class="text-xl"><Setting /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-if="isDarkModeEnabled"
                  command="toggleTheme"
                  :icon="isDark ? Sunny : Moon"
                >
                  {{ isDark ? t("settings.lightMode") : t("settings.darkMode") }}
                </el-dropdown-item>
                <el-dropdown-item
                  v-if="isi18nEnabled"
                  divided
                  command="es"
                  :icon="currentLocale === 'es' ? Check : ''"
                  :disabled="currentLocale === 'es'"
                >
                  {{ t("settings.spanish") }}
                </el-dropdown-item>
                <el-dropdown-item
                  v-if="isi18nEnabled"
                  command="en"
                  :icon="currentLocale === 'en' ? Check : ''"
                  :disabled="currentLocale === 'en'"
                >
                  {{ t("settings.english") }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div> -->
      </div>

      <!-- Mobile Menu Button -->
      <div class="mobile-menu-toggle">
        <!-- <el-dropdown @command="handleCommand" class="settings-dropdown">
          <span class="el-dropdown-link">
            <el-icon class="text-xl"><Setting /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu v-if="isDarkModeEnabled">
              <el-dropdown-item command="toggleTheme" :icon="isDark ? Sunny : Moon">
                {{ isDark ? t("settings.lightMode") : t("settings.darkMode") }}
              </el-dropdown-item>
              <el-dropdown-item
                v-if="isi18nEnabled"
                divided
                command="es"
                :icon="currentLocale === 'es' ? Check : ''"
                :disabled="currentLocale === 'es'"
              >
                {{ t("settings.spanish") }}
              </el-dropdown-item>
              <el-dropdown-item
                v-if="isi18nEnabled"
                command="en"
                :icon="currentLocale === 'en' ? Check : ''"
                :disabled="currentLocale === 'en'"
              >
                {{ t("settings.english") }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown> -->

        <button
          @click="toggleMobileMenu"
          class="hamburger-btn"
          :class="{ active: isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
          {{ t("navbar.home") }}
        </router-link>

        <!-- Mobile Products/Services Submenu -->
        <div class="mobile-submenu">
          <div class="mobile-submenu-header" @click="toggleProductsSubmenu">
            {{ t("navbar.productsServices") }}
            <el-icon class="submenu-arrow" :class="{ 'rotate-180': isProductsSubmenuOpen }">
              <arrow-down />
            </el-icon>
          </div>
          <transition name="submenu">
            <div v-if="isProductsSubmenuOpen" class="mobile-submenu-content">
              <div class="submenu-section">
                <div class="submenu-section-title">Productos</div>
                <div class="submenu-item" @click="handleProductServiceCommand('security')">
                  <el-icon><Lock /></el-icon>
                  {{ t("navbar.products.security") }}
                </div>
                <div class="submenu-item" @click="handleProductServiceCommand('infrastructure')">
                  <el-icon><Monitor /></el-icon>
                  {{ t("navbar.products.infrastructure") }}
                </div>
                <div class="submenu-item" @click="handleProductServiceCommand('networking')">
                  <el-icon><Connection /></el-icon>
                  {{ t("navbar.products.networking") }}
                </div>
                <div class="submenu-item" @click="handleProductServiceCommand('accessControl')">
                  <el-icon><Key /></el-icon>
                  {{ t("navbar.products.accessControl") }}
                </div>
              </div>
              <div class="submenu-section">
                <div class="submenu-section-title">Servicios</div>
                <div class="submenu-item" @click="handleProductServiceCommand('consultancy')">
                  <el-icon><DocumentChecked /></el-icon>
                  {{ t("navbar.services.consultancy") }}
                </div>
                <div class="submenu-item" @click="handleProductServiceCommand('training')">
                  <el-icon><Reading /></el-icon>
                  {{ t("navbar.services.training") }}
                </div>
                <div class="submenu-item" @click="handleProductServiceCommand('support')">
                  <el-icon><Tools /></el-icon>
                  {{ t("navbar.services.support") }}
                </div>
              </div>
            </div>
          </transition>
        </div>

        <a href="#software" class="mobile-nav-link" @click.prevent="scrollToSoftwareMobile">
          {{ t("navbar.software") }}
        </a>
        <a href="#educacion" class="mobile-nav-link" @click.prevent="scrollToEducationMobile">
          {{ t("navbar.education") }}
        </a>
        <a href="#contact" class="mobile-nav-link" @click.prevent="scrollToContactMobile">
          {{ t("navbar.contact") }}
        </a>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu"></div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { useI18n } from "vue-i18n"
import { useRouter } from "vue-router"
import {
  Setting,
  Moon,
  Sunny,
  Check,
  ArrowDown,
  Lock,
  Monitor,
  Connection,
  Key,
  VideoCamera,
  DocumentChecked,
  Reading,
  Tools,
} from "@element-plus/icons-vue"
import { toggleDarkMode, setupElementPlus } from "@/plugins/element-plus"
import { getCurrentInstance } from "vue"
import features from "@/config/features"
import landingConfig from "@/config/landing.config"
import { useServiceModals } from "@/composables/useServiceModals"

const appTitle = import.meta.env.VITE_APP_TITLE || "Mi App"
const { locale, t } = useI18n()
const router = useRouter()
const { openModal } = useServiceModals()
const isDark = ref(false)
const currentLocale = ref("es")
const isMobileMenuOpen = ref(false)
const isProductsSubmenuOpen = ref(false)
const isDarkModeEnabled = features.darkMode
const isFixed = landingConfig.navbar.sticky || false
const isi18nEnabled = features.translations

// Mapeo de productos a nombres de rutas
const productRoutes = {
  security: "Security",
  infrastructure: "Infrastructure",
  networking: "Networking",
  accessControl: "AccessControl",
}

// Servicios que usan modales
const serviceModals = ["consultancy", "training", "support"]

onMounted(() => {
  isDark.value = localStorage.getItem("theme") === "dark"
  currentLocale.value = localStorage.getItem("locale") || "es"
  locale.value = currentLocale.value

  if (isDark.value) {
    toggleDarkMode(true)
  }

  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})

const handleResize = () => {
  if (window.innerWidth >= 768 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : ""
  if (!isMobileMenuOpen.value) {
    isProductsSubmenuOpen.value = false
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isProductsSubmenuOpen.value = false
  document.body.style.overflow = ""
}

const toggleProductsSubmenu = () => {
  isProductsSubmenuOpen.value = !isProductsSubmenuOpen.value
}

const handleProductServiceCommand = (command) => {
  // Si es un producto, navegar a su página
  if (productRoutes[command]) {
    router.push({ name: productRoutes[command] })
    closeMobileMenu()
  }
  // Si es un servicio, abrir el modal
  else if (serviceModals.includes(command)) {
    // Primero navegar a home si no estamos ahí
    if (router.currentRoute.value.path !== "/") {
      router.push("/").then(() => {
        // Pequeño delay para asegurar que el componente esté montado
        setTimeout(() => {
          openModal(command)
        }, 300)
      })
    } else {
      openModal(command)
    }
    closeMobileMenu()
  }
}

const scrollToContact = () => {
  // Si estamos en la página principal, hacer scroll
  if (router.currentRoute.value.path === "/") {
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  } else {
    // Si no, navegar primero y luego hacer scroll
    router.push("/").then(() => {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    })
  }
}

const scrollToSoftware = () => {
  // Si estamos en la página principal, hacer scroll
  if (router.currentRoute.value.path === "/") {
    setTimeout(() => {
      document.getElementById("software")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  } else {
    // Si no, navegar primero y luego hacer scroll
    router.push("/").then(() => {
      setTimeout(() => {
        document.getElementById("software")?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    })
  }
}

const scrollToEducation = () => {
  // Si estamos en la página principal, hacer scroll
  if (router.currentRoute.value.path === "/") {
    setTimeout(() => {
      document.getElementById("educacion")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  } else {
    // Si no, navegar primero y luego hacer scroll
    router.push("/").then(() => {
      setTimeout(() => {
        document.getElementById("educacion")?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    })
  }
}

const scrollToContactMobile = () => {
  closeMobileMenu()
  scrollToContact()
}

const scrollToSoftwareMobile = () => {
  closeMobileMenu()
  scrollToSoftware()
}

const scrollToEducationMobile = () => {
  closeMobileMenu()
  scrollToEducation()
}

const handleCommand = (command) => {
  if (command === "toggleTheme") {
    isDark.value = !isDark.value
    localStorage.setItem("theme", isDark.value ? "dark" : "light")
    toggleDarkMode(isDark.value)
  } else if (command === "es" || command === "en") {
    currentLocale.value = command
    locale.value = command
    localStorage.setItem("locale", command)

    const app = getCurrentInstance()
    if (app) {
      setupElementPlus(app.appContext.app)
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--el-bg-color);
  /* border-bottom: 1px solid var(--el-border-color); */
  /* box-shadow: var(--el-box-shadow-light); */
  z-index: 1000;
  transition: all 0.3s;
}

.navbar-fixed {
  position: sticky;
  top: 0;
}

.navbar-static {
  position: relative;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1001;
}

.logo {
  /* width: 40px; */
  height: 60px;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--el-text-color-primary);
  transition: color 0.3s;
}

/* Desktop Menu */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.desktop-menu {
  display: none;
}

.nav-link {
  color: var(--el-text-color-regular);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
  cursor: pointer;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--el-color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--el-color-primary);
}

.nav-link.router-link-active {
  color: var(--el-color-primary);
}

.dropdown-trigger {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-trigger:hover {
  color: var(--el-color-primary);
}

.dropdown-header {
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--el-text-color-secondary);
  cursor: default;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  color: var(--el-text-color-regular);
  transition: color 0.2s;
  cursor: pointer;
}

.el-dropdown-link:hover {
  color: var(--el-color-primary);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 1001;
}

.settings-dropdown {
  display: flex;
  align-items: center;
}

.hamburger-btn {
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
}

.hamburger-btn span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--el-text-color-primary);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger-btn.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 64px;
  right: 0;
  width: 280px;
  max-width: 85vw;
  height: calc(100vh - 64px);
  background-color: var(--el-bg-color);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  z-index: 999;
}

.mobile-nav-link {
  color: var(--el-text-color-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.2s;
  text-align: left;
  cursor: pointer;
  display: block;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background-color: var(--el-fill-color-light);
  color: var(--el-color-primary);
}

.mobile-cta-btn {
  margin-top: 8px;
  width: 100%;
}

/* Mobile Submenu */
.mobile-submenu {
  width: 100%;
}

.mobile-submenu-header {
  color: var(--el-text-color-primary);
  font-weight: 500;
  font-size: 1.1rem;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-submenu-header:hover {
  background-color: var(--el-fill-color-light);
}

.submenu-arrow {
  transition: transform 0.3s ease;
}

.submenu-arrow.rotate-180 {
  transform: rotate(180deg);
}

.mobile-submenu-content {
  padding: 8px 0 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.submenu-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.submenu-section-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--el-text-color-secondary);
  padding: 8px 12px 4px;
}

.submenu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 6px;
  color: var(--el-text-color-regular);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.submenu-item:hover {
  background-color: var(--el-fill-color-light);
  color: var(--el-color-primary);
}

.submenu-item .el-icon {
  font-size: 18px;
}

.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.3s ease;
  max-height: 600px;
  overflow: hidden;
}

.submenu-enter-from,
.submenu-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  backdrop-filter: blur(2px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .desktop-menu {
    display: flex;
  }

  .mobile-menu-toggle {
    display: none;
  }

  .brand-name {
    font-size: 1.25rem;
  }
}

@media (max-width: 767px) {
  .navbar-container {
    padding: 0 16px;
    height: 64px;
  }

  .logo {
    /* width: 36px; */
    height: 50px;
  }

  .brand-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 12px;
  }

  .brand-name {
    font-size: 1rem;
  }

  .mobile-menu {
    width: 100vw;
    max-width: 100vw;
  }
}

/* Tablet optimizations */
@media (min-width: 768px) and (max-width: 1024px) {
  .navbar-container {
    padding: 0 24px;
  }

  .navbar-menu {
    gap: 16px;
  }

  .nav-link {
    font-size: 0.95rem;
  }
}
</style>
