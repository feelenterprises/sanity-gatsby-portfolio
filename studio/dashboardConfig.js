export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6086f2f8079af9323c37a4c8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-d1rv432t',
                  apiId: 'eed0e2c2-7f8d-4fb2-b140-e793094e84bd'
                },
                {
                  buildHookId: '6086f2f80bf90234e478ef15',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qhyibds5',
                  apiId: 'a208ad11-3794-4691-b731-a82ffdc4894b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/feelenterprises/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qhyibds5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
