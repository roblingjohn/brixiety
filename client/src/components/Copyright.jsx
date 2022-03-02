import moment from 'moment';
import React from 'react';

const Copyright = () => {
    return (
        <div>
            <h6 className="copyright">©2021-{moment().format("YYYY")} Brixiety</h6>
        </div>
    );
};

export default Copyright;