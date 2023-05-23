import React from 'react'
import styles from './MainTemplate.module.css'

const MainTemplate = ({leftside, children, title}) => {

  const renderTitle = () => {
    if (title == "Weather Information") {
      return (
        <span className='fs-2'>Weather <span className='fw-semibold'>Information</span></span>
      )
    }else {
      return (
        <span className='fs-2 fw-semibold'>{title}</span>
      )
    }
  }

  return (
   <main className={`vh-100 w-100 ${styles.mainContainer}`}>
    <div className="row h-100">
      <div className={`col-12 col-sm-7 order-2 order-sm-1 col-md-8 bg-white h-100 ${styles.leftSide}`}>
        <div className="container">
          <div className="row">
          <div className='col-12 p-2 p-md-4'>
            <div className="row ps-4">
              <div className="col-12 mb-3">
                {renderTitle()}
              </div>
              {leftside}
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="col-12 col-sm-5 order-1 order-sm-2 col-md-4 main-bg vh-100 p-0">
        {children}
      </div>
    </div>
   </main>
  )
}

export default MainTemplate