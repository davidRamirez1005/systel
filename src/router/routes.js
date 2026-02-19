import features from "@/config/features"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/modules/home/pages/HomePage.vue"),
    meta: { layout: "landing" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/modules/auth/pages/NotFoundPage.vue"),
    meta: { layout: "empty" },
  },
]

if (features.modules.landing) {
  routes.push(
    {
      path: "/seguridad-informatica",
      name: "Security",
      component: () => import("@/modules/home/pages/SecurityPage.vue"),
      meta: { layout: "landing" },
    },
    {
      path: "/infraestructura-TI",
      name: "Infrastructure",
      component: () => import("@/modules/home/pages/InfrastructurePage.vue"),
      meta: { layout: "landing" },
    },
    {
      path: "/networking",
      name: "Networking",
      component: () => import("@/modules/home/pages/NetworkingPage.vue"),
      meta: { layout: "landing" },
    },
    {
      path: "/control-acceso",
      name: "AccessControl",
      component: () => import("@/modules/home/pages/AccessControlPage.vue"),
      meta: { layout: "landing" },
    },
  )
}

export default routes
