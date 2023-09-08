import React from 'react'
import Card from './card'

function Dashboard() {
  let data = [
    {
      title: 'EARNINGS (MONTHLY)',
      value: '$5000',
      color: 'primary',
      icon: 'calendar'
    },
    {
      title: 'EARNINGS (ANNUAL)',
      value: '$60000',
      color: 'success',
      icon: 'dollar-sign'
    },
    {
      title: 'TASKS',
      value: '50',
      color: 'info',
      icon: 'clipboard-list'
    },
    {
      title: 'PENDING REQUESTS',
      value: '18',
      color: 'warning',
      icon: 'comments'
    }

  ]
  return <>
    <div id="content-wrapper" className="d-flex flex-column">

      {/* <!-- Main Content --> */}
      <div id="content">

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">
            {
              data.map((e, i) => {
                return <Card key={i}
                  title={e.title}
                  value={e.value}
                  color={e.color}
                  icon={e.icon}
                />
              })
            }
          </div>

        </div>
        {/* <!-- /.container-fluid --> */}

      </div>
      {/* <!-- End of Main Content --> */}

    </div>
  </>
}

export default Dashboard