export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f9175e869ae25dc9a634691',
                  title: 'Sanity Studio',
                  name: 'warrior-artists-studio',
                  apiId: 'adce1444-93c6-4692-a8b2-7380deb421d9'
                },
                {
                  buildHookId: '5f9175e84d13f8e6bbb61836',
                  title: 'Blog Website',
                  name: 'warrior-artists',
                  apiId: 'b56b1f5f-f54a-4d1b-8e6f-78c00daa2601'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Wilton36/warrior-artists',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://warrior-artists.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
