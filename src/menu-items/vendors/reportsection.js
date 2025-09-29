// assets
import {
  IconUserPlus,
  IconUserCheck,
  IconUsers,
  IconUpload,
  IconDownload
} from '@tabler/icons-react';

// constants
const icons = {
  IconUserPlus,
  IconUserCheck,
  IconUsers,
  IconUpload,
  IconDownload
};

// ==============================|| DASHBOARD FULL MENU GROUP ||============================== //
const Reportsection = {
  id: 'report-management', // Changed to unique ID
  title: 'REPORT SECTION',
  type: 'group',
  children: [
    {
      id: 'Expense-Report',
      title: 'Expense Report',
      type: 'item',
      url: '/report/expense',
      icon: icons.IconUserPlus,
      breadcrumbs: false
    },
<<<<<<< HEAD
    // {
    //   id: 'Disbursement-Method',
    //   title: 'Disbursement Method',
    //   type: 'item',
    //   url: '/report/disburse',
    //   icon: icons.IconUserCheck,
    //   breadcrumbs: false
    // },
=======
    {
      id: 'Disbursement-Method',
      title: 'Disbursement Method',
      type: 'item',
      url: '/report/disburse',
      icon: icons.IconUserCheck,
      breadcrumbs: false
    },
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
    {
      id: 'Trip-Report',
      title: 'Trip Report',
      type: 'item',
      url: '/report/trip',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
<<<<<<< HEAD
    // {
    //   id: 'Vat-Report',
    //   title: 'Vat Report',
    //   type: 'item',
    //   url: '/report/vat',
    //   icon: icons.IconUpload,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'bulk-export',
    //   title: 'Bulk Export',
    //   type: 'item',
    //   url: '/providers/export',
    //   icon: icons.IconDownload,
    //   breadcrumbs: false
    // }
=======
    {
      id: 'Vat-Report',
      title: 'Vat Report',
      type: 'item',
      url: '/report/vat',
      icon: icons.IconUpload,
      breadcrumbs: false
    },
    {
      id: 'bulk-export',
      title: 'Bulk Export',
      type: 'item',
      url: '/providers/export',
      icon: icons.IconDownload,
      breadcrumbs: false
    }
>>>>>>> 50aee26ee41309eee8d419ec36916c3ef6a9d0fa
  ]
};

export default Reportsection;