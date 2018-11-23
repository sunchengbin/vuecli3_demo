// import weixin from '@/libs/app/weixin'
// import Vue from 'vue'
function setTitle (to) {
  to.matched.some(record => {
    document.title = record.meta.title || process.env.VUE_APP_TITLE
  })
}
export default function (router) {
  router.beforeEach(async (to, from, next) => {
    // 设置title
    setTitle(to)
    // 判断是否授权,如果未授权则跳到授权
    // weixin.getOpenID(to.path, to.query)
    next()
  })
  router.afterEach((to, from, next) => {
    if (from.name !== null) {
      // Vue.$loading.open()
    }
  })
}
