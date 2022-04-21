import React from "react";

const Cockpit = (props) => {
    console.log(`[App.js] Cockpit`);
    return (
        <div className="row">
          <div className="col-xs-6">
              <button onClick={props.toggle} className='btn btn-primary'>Toggle Persons</button>
            </div>
            <div className="col-xs-6">
              <button className='btn btn-warning'>Switch Data</button>
            </div>
        </div>
    )
}

export default Cockpit;