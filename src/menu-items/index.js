import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import vehiclemanagement from './vendors/bookingmanagement';
import Driversection from './vendors/driversection';
import Marketingsection from './vendors/marketingsection';
import Businesssection from './vendors/businesssection';
import Reportsection from './vendors/reportsection';
import Employeesection from './vendors/employeesection';
// import Tripmanagement from './vendors/venuemanagement';
// import venuemanagement from './vendors/bookingmanagement';
import tripmanagement from './vendors/tripmanagement';
import bookingmanagement from './vendors/bookingmanagement';
import venuemanagement from './vendors/venuemanagement';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, bookingmanagement,venuemanagement, Driversection, Marketingsection,Businesssection,Reportsection, Employeesection]
};

export default menuItems;
