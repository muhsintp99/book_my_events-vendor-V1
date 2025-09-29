import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import DriverView from '../views/DriverView';
import { ImportExport } from '@mui/icons-material';
import Schedules from '../views/Schedules';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
// Fixed the import path - removed the '../' and made sure it matches your file structure
const AllTrips = Loadable(lazy(() => import('views/Alltrips')));
const Scheduled = Loadable(lazy(()=> import('../views/Scheduled')));
const Pendings = Loadable(lazy(()=> import('../views/Pendings')));
const Confirmed = Loadable(lazy(()=> import('../views/Confirmed')));
const Ongoing = Loadable(lazy(()=> import('../views/Ongoing')));
const Completed = Loadable(lazy(()=> import('../views/Completed')));
const Canceled = Loadable(lazy(()=> import('../views/Canceled')));
const PaymentFailed = Loadable(lazy(()=> import('../views/PaymentFailed')));

//report section routing
const ExpenseReport = Loadable(lazy(()=> import('../views/ExpenseReport')));
const DisbursementReport = Loadable(lazy(()=> import('../views/DisburseReport')));
const TripReport = Loadable(lazy(()=> import('../views/TripReport')));
const VatReport = Loadable(lazy(()=> import('../views/VatReport')));
const TripDetail = Loadable(lazy(()=> import('../views/TripDetails')));


//vehicle setup routing
const CreateNew = Loadable(lazy(()=> import('../views/CreateNew')));
const List = Loadable(lazy(()=> import('../views/List')));
const ListView = Loadable(lazy(()=> import('../views/ListView')));
const Category = Loadable(lazy(()=> import('../views/Category')));
const Brandlist = Loadable(lazy(()=> import('../views/BrandList')));

//driver section routing
const AddDriver = Loadable(lazy(()=> import('../views/AddDriver')));
const Drivers = Loadable(lazy(()=> import('../views/Drivers')));

//marketing section routing
const Coupon = Loadable(lazy(()=> import('../views/Coupon')))
const Banners = Loadable(lazy(()=> import('../views/Banners')))

//business section routing
const ProviderConfig = Loadable(lazy(()=> import('../views/ProviderConfig')));
const Notification = Loadable(lazy(()=> import('../views/Notification')))
const BusinessPlan = Loadable(lazy(()=> import('../views/BusinessPlan')));
const ChangePlan =Loadable(lazy(()=> import('../views/ChangePlan')));
const MyShop = Loadable(lazy(()=> import('../views/MyShop')));
const ShiftPlan =Loadable(lazy(()=> import('../views/ShiftPlan')));
const EditProvider = Loadable(lazy(()=> import('../views/EditProvider')));
const Wallet = Loadable(lazy(()=> import('../views/Wallet')));
const Disbursement = Loadable(lazy(()=> import('../views/Disbursement')));
const Review = Loadable(lazy(()=> import('../views/Review')));
const Chat = Loadable(lazy(()=> import('../views/Chat')));

//employee section routing
const  EmployeeRole = Loadable(lazy(()=> import('../views/EmployeeRole')));
const AddEmployee= Loadable(lazy(()=> import('../views/AddEmployee')));
const EmployeeList = Loadable(lazy(()=> import('../views/EmployeeList')));
//profile

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'trips',
      children: [
        {
          path: '', // This will handle /trips
          element: <AllTrips />
        },

        {
          path: 'scheduled',
          element: <Scheduled /> 
        },
        {
          path: 'pending',
          element: <Pendings />
        },
        {
          path: 'confirmed',
          element: <Confirmed />
        },
        {
          path: 'ongoing',
          element: <Ongoing />
        },
        {
          path: 'completed',
          element: <Completed />
        },
        {
          path: 'canceled',
          element: <Canceled />
        },
        {
          path: 'payment-failed',
          element: <PaymentFailed />
        }
      ]
    },
    {
      path: 'venue-setup',
      children: [
        {
          path: '/venue-setup/new',
          element: <CreateNew />
        },
        {
          path: '/venue-setup/new/:id',
          element: <CreateNew />
        },
        {
          path: '/venue-setup/lists',
          element: <List />
        },
        {
          path: '/venue-setup/listview',
          element: <ListView />
        }
      ]
    },
    {
      path: 'venue',
      children: [
        {
          path: '/venue/categories',
          element: <Category/>
        },
        {
          path: '/venue/schedules',
          element: <Schedules/>
        }
      ]
    },
    {
      path: 'vehicles',
      children: [
        {
          path: '/vehicles/brands',
          element: <Brandlist/>
        }
      ]
    },
    {
      path: 'providers',
      children: [
        {
          path: '/providers/new',
          element: <AddDriver/>
        },
        {
          path: '/providers/add',
          element: <Drivers/>
        },
        {
          path: '/providers/driverview',
          element: <DriverView/>
        },
        {
          path: '/providers/newcoupon',
          element: <Coupon/>
        },
        {
          path: '/providers/banner',
          element: <Banners/>
        }
      ]
    },
    {
      path: 'business',
      children: [
        {
          path: '/business/new',
          element: <ProviderConfig/>
        },
        {
          path: '/business/add',
          element: <Notification/>
        },
        {
          path: '/business/list',
          element: <MyShop/>
        },
        {
          path: '/business/editpro',
          element: <EditProvider/>
        },
        {
          path: '/business/plan',
          element: <BusinessPlan/>
        },
        {
          path: '/business/changeplan',
          element: <ChangePlan/>
        },
        {
          path: '/business/shiftplan',
          element: <ShiftPlan/>
        },
        {
          path: '/business/export',
          element: <Wallet/>
        },
        {
          path: '/business/disburse',
          element: <Disbursement/>
        },
        {
          path: '/business/review',
          element: <Review/>
        },
        {
          path: '/business/chat',
          element: <Chat/>
        }
      ]
    },
    {
      path: 'report',
      children: [
        {
          path: '/report/expense',
          element: <ExpenseReport/>
        },
        {
          path: '/report/disburse',
          element: <DisbursementReport/>
        },
        {
          path: '/report/trip',
          element: <TripReport/>

        },
        {
          path: '/report/tripdetail',
          element: <TripDetail/>
        },
        {
          path: '/report/vat',
          element: <VatReport/>
        }
      ]
    },
    {
      path: 'employee',
      children: [
        {
          path:'/employee/role',
          element: <EmployeeRole/>
          
        },
        {
          path: '/employee/new',
          element: <AddEmployee/>
        },
        {
          path: '/employee/list',
          element: <EmployeeList/>
        }
      ]
    },
    {
      path: 'vehicle-setup',
      children: [
        {
          path: '/vehicle-setup/leads',
          element: <CreateNew />
        },
        {
          path: '/vehicle-setup/lists',
          element: <List />
        },
        {
          path: '/vehicle-setup/listview',
          element: <ListView />
        }
      ]
    },
    {
      path: 'vehicles',
      children: [
        {
          path: '/vehicles/categories',
          element: <Category/>
        }
      ]
    },
    {
      path: 'vehicles',
      children: [
        {
          path: '/vehicles/brands',
          element: <Brandlist/>
        }
      ]
    },
    {
      path: 'providers',
      children: [
        {
          path: '/providers/new',
          element: <AddDriver/>
        },
        {
          path: '/providers/add',
          element: <Drivers/>
        },
        {
          path: '/providers/driverview',
          element: <DriverView/>
        },
        {
          path: '/providers/newcoupon',
          element: <Coupon/>
        },
        {
          path: '/providers/banner',
          element: <Banners/>
        }
      ]
    },
    {
      path: 'business',
      children: [
        {
          path: '/business/new',
          element: <ProviderConfig/>
        },
        {
          path: '/business/add',
          element: <Notification/>
        },
        {
          path: '/business/list',
          element: <MyShop/>
        },
        {
          path: '/business/editpro',
          element: <EditProvider/>
        },
        {
          path: '/business/plan',
          element: <BusinessPlan/>
        },
        {
          path: '/business/changeplan',
          element: <ChangePlan/>
        },
        {
          path: '/business/shiftplan',
          element: <ShiftPlan/>
        },
        {
          path: '/business/export',
          element: <Wallet/>
        },
        {
          path: '/business/disburse',
          element: <Disbursement/>
        },
        {
          path: '/business/review',
          element: <Review/>
        },
        {
          path: '/business/chat',
          element: <Chat/>
        }
      ]
    },
    {
      path: 'report',
      children: [
        {
          path: '/report/expense',
          element: <ExpenseReport/>
        },
        {
          path: '/report/disburse',
          element: <DisbursementReport/>
        },
        {
          path: '/report/trip',
          element: <TripReport/>

        },
        {
          path: '/report/tripdetail',
          element: <TripDetail/>
        },
        {
          path: '/report/vat',
          element: <VatReport/>
        }
      ]
    },
    {
      path: 'employee',
      children: [
        {
          path:'/employee/role',
          element: <EmployeeRole/>
          
        },
        {
          path: '/employee/new',
          element: <AddEmployee/>
        },
        {
          path: '/employee/list',
          element: <EmployeeList/>
        }
      ]
    },

    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;