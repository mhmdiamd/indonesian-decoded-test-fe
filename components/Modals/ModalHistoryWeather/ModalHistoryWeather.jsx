import React from 'react'
import TableWeatherInformation from '../../Tables/TableWeatherInformation'

const ModalHistoryWeather = ({id, data}) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{data?.name} Weather History</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body overflow-scroll">
            <TableWeatherInformation city={data?.name} className={""}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalHistoryWeather