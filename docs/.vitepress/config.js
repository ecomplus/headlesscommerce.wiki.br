export default {
  title: 'Headless Commerce Wiki Brasil',
  description: 'O que é, por que e como utilizar headless commerce para lojas virtuais no Brasil',
  themeConfig: {
    siteTitle: 'Headless Commerce',
    nav: [
      { text: 'Resumo para iniciantes', link: '/' },
      { text: 'Guia completo', link: '/o-que-e-headless-commerce' },
    ],
    sidebar: [
      {
        text: 'Guia',
        items: [
          {
            items: [
              { text: 'O que é', link: '/o-que-e-headless-commerce' },
              { text: 'Por que utilizar', link: '/por-que-utilizar-headless-commerce' },
              { text: 'Vantagens competitivas', link: '/vantagens-do-headless-commerce' },
              { text: 'Desafios na adoção', link: '/desafios-ao-adotar-headless-commerce' },
            ]
          }
        ]
      }
    ]
  }
}
