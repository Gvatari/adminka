export const menu = {
  state:{
    menu: [
        {
            users: {
                id: 1,
                title: 'Пользователи',
                url: '/',
            }
        },
        {
            projects: {
                id: 2,
                title: 'Проекты',
                url: '/projects',
                children: {
                    role: {
                        id: 1,
                        parent_id: 2,
                        title: 'Роли',
                        url: '/role'
                    },
                    accesses: {
                        id: 2,
                        parent_id: 2,
                        title: 'Доступы',
                        url: '/accesses'
                    },
                    settings: {
                        id: 3,
                        parent_id: 2,
                        title: 'Настройки',
                        url: '/settings'
                    }
                }
            }
        }
    ]
  },
  getters:{
    getMenu(state) {
        return state.menu;
    }
  },
  mutations:{
    
  },
  actions:{
   
  }
};