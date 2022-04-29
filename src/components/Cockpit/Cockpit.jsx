import React, { useEffect } from "react";

const Cockpit = (props) => {
  // useEffect( () => {
  //   // API Call Mockup
  //   setTimeout( () => alert('Fetch / Saved to DB'), 1000 )
  // }, [props.persons] )

  useEffect( () => console.log('[Cockpit.js] change in showPersons prop'), [props.showPersons])

    console.log(`[App.js] Cockpit`);
    return (
        <div className="row">
          <div className="col-xs-4">
            <button onClick={props.delete} className="btn btn-danger">Remove Cockpit</button>
          </div>
          <div className="col-xs-4">
              <button onClick={props.toggle} className='btn btn-primary'>Toggle Persons</button>
            </div>
            <div className="col-xs-4">
              <button className='btn btn-warning'>Switch Data</button>
            </div>
        </div>
    )
}

export default Cockpit;