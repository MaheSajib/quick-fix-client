import React from 'react';
import repair from '../../../image/repair.jpg';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#232323', fontSize: '50px'}}> <b>We Are Experts <br/> At Cell Phone <br/> Repair!</b></h1>
                <p className="text-secondary">Did you drop or break your phone? Our highly trained repair technicians are ready to fix cell phones.</p>
                <button style={{ height: '60px', width: '150px' }}  className="btn btn-success rounded-pill">Repair my device</button>
            </div>
            <div className="col-md-6">
                <img src={repair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;