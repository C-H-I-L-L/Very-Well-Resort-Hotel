import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';



export class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title:"Free cocktails",
                info: "Duis velit labore veniam et do ullamco quis proident elit magna aute consequat eiusmod."
            },
            {
                icon: <FaHiking />,
                title:"Endless hiking",
                info: "Duis velit labore veniam et do ullamco quis proident elit magna aute consequat eiusmod."
            },
            {
                icon: <FaShuttleVan />,
                title:"Free shuttle",
                info: "Duis velit labore veniam et do ullamco quis proident elit magna aute consequat eiusmod."
            },
            {
                icon: <FaBeer />,
                title:"Strongest Beer",
                info: "Duis velit labore veniam et do ullamco quis proident elit magna aute consequat eiusmod."
            }
        ]
    };

    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}

               </div>
            </section>
        )
    }
}

export default Services
