import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "C:/Users/Acer/Documents/Software/Web/nuxt/callForCode23/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}