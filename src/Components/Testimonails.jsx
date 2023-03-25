import React from 'react';
import {clientsCards} from "../Utilies/Conts";

export default function Testimonails() {
  return (
    <>
      <main>
        <section className='container py-5 center'>
          {clientsCards.map((item, i) => 
            <>
              <div className={`testminailsCard p-5 card${i} rounded-3`}>
                <div className="clientInfo d-flex align-items-center gap-3 mb-3">
                  <div className="img">
                    <img src={item.img} alt="" className="w-100 rounded-circle" />
                  </div>
                  <div className="details">
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                  </div>
                </div>
                <div className="msg">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  )
}
