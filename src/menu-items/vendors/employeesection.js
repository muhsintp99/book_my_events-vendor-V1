// assets
import {
  IconUserPlus,
  IconUserCheck,
  IconUsers,
  IconUpload,
  IconDownload,
  IconBuildingSkyscraper
} from '@tabler/icons-react';

// constants
const icons = {
  IconUserPlus,
  IconUserCheck,
  IconUsers,
  IconUpload,
  IconDownload,
  IconBuildingSkyscraper
};

// ==============================|| DASHBOARD FULL MENU GROUP ||============================== //
const Employeesection = {
<<<<<<< HEAD
  // id: 'employee-management', // Changed to unique ID
  // title: 'EMPLOYEE SECTION',
  // type: 'group',
  // children: [
  //   {
  //     id: 'Employee-Role',
  //     title: 'Employee Role',
  //     type: 'item',
  //     url: '/employee/role',
  //     icon: icons.IconUserPlus,
  //     breadcrumbs: false
  //   },
  //   {
  //     id: 'Employees',
  //     title: 'Employees',
  //     type: 'collapse',
  //     icon: icons.IconBuildingSkyscraper,
  //     children: [
  //       {
  //         id: 'Create-new',
  //         title: 'Add New',
  //         type: 'item',
  //         url: '/employee/new'
  //       },
  //       {
  //         id: 'list',
  //         title: 'List',
  //         type: 'item',
  //         url: '/employee/list'
  //       }
  //     ]
  //   }
  // ]
=======
  id: 'provider-management',
  title: 'EMPLOYEE SECTION',
  type: 'group',
  children: [
    {
      id: 'Employee-Role',
      title: 'Employee Role',
      type: 'item',
      url: '/employee/role',
      icon: icons.IconUserPlus,
      breadcrumbs: false
    },
   {
          id: 'Employees',
          title: 'Employees',
          type: 'collapse',
          icon: icons.IconBuildingSkyscraper,  // <- changed icon here
          children: [
            {
              id: 'Create-new',
              title: 'Add New ',
              type: 'item',
              url: '/employee/new'
            },
            {
              id: 'list',
              title: 'List',
              type: 'item',
              url: '/employee/list'
            }
           
          ]
        },
  ]
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
};

export default Employeesection;