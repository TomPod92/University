import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StudentsList from '../../Students/StudentsList.js';
import InspectionsList from '../../Inspections/InspectionsList.js';
import LeasesList from '../../Leases/LeasesList.js';
import InvoicesList from '../../Invoices/InvoicesList.js'

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={StudentsList} exact/>
        <Route path="/students/list" component={StudentsList}/>
        <Route path="/inspections/list" component={InspectionsList}/>
        <Route path="/leases/list" component={LeasesList}/>
        <Route path="/invoices/list" component={InvoicesList}/>
      </Switch>
    </main>
  )
}

export default Main;