import React from 'react';

const CustomAccordion = ({ header, body, index }) => {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item shadow mb-3">
                <h2 className="accordion-header" id="headingOne">
                    <button className={'accordion-button collapsed'} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">{header}</button>
                </h2>
                <div id="collapseOne" className={"accordion-collapse collapse show"} aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">{body}</div>
                </div>
            </div>
        </div>
    )
}

export default CustomAccordion;